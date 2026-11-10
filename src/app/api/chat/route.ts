import { NextResponse } from "next/server";
import { findBestKnowledgeAnswer } from "@/lib/vmcKnowledge";
import { VMC_GROQ_SYSTEM_PROMPT, VMC_SITEMAP_ROUTES } from "@/lib/vmcSitemap";

export async function POST(req: Request) {
  try {
    const { message, conversationHistory } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const groqApiKey = process.env.GROQ_API_KEY;

    // 1. Try Groq AI (Ultra-fast Llama-3.3-70b-versatile or Llama-3.1-8b-instant)
    if (groqApiKey) {
      try {
        const { default: Groq } = await import("groq-sdk");
        const groq = new Groq({ apiKey: groqApiKey });

        const messagesForGroq: Array<{ role: "system" | "user" | "assistant"; content: string }> = [
          {
            role: "system",
            content: VMC_GROQ_SYSTEM_PROMPT
          }
        ];

        // Append recent chat history
        if (Array.isArray(conversationHistory)) {
          conversationHistory.slice(-4).forEach((item: any) => {
            if (item.sender && item.text) {
              messagesForGroq.push({
                role: item.sender === "user" ? "user" : "assistant",
                content: item.text
              });
            }
          });
        }

        messagesForGroq.push({
          role: "user",
          content: message
        });

        // Robust model list in order of preference for the current key
        const preferredModels = [
          "qwen/qwen3.8-27b",
          "openai/gpt-oss-120b",
          "openai/gpt-oss-20b"
        ];

        let rawContent = null;
        for (const model of preferredModels) {
          try {
            const chatCompletion = await groq.chat.completions.create({
              messages: messagesForGroq,
              model,
              temperature: 0.3,
              max_tokens: 600,
              response_format: { type: "json_object" }
            });
            rawContent = chatCompletion.choices[0]?.message?.content;
            if (rawContent) break;
          } catch (modelErr) {
            console.warn(`Groq model ${model} failed, trying next:`, modelErr);
          }
        }

        if (rawContent) {
          const parsed = JSON.parse(rawContent);
          
          // Enforce strict no-free policy: strip out any inadvertent "free" phrasing
          const sanitizeText = (str?: string) => {
            if (!str) return str;
            return str
              .replace(/\bfree\s+(consultation|audit|assessment|demo|trial|service)\b/gi, "consultation")
              .replace(/\bfree\b/gi, "")
              .replace(/\s{2,}/g, " ")
              .trim();
          };

          const sanitizedReply = sanitizeText(parsed.reply);
          const sanitizedActions = (parsed.actions || []).map((act: any) => ({
            ...act,
            label: sanitizeText(act.label) || "Connect with Our Experts"
          }));

          return NextResponse.json({
            reply: sanitizedReply,
            recommendedPage: parsed.recommendedPage
              ? {
                  ...parsed.recommendedPage,
                  reason: sanitizeText(parsed.recommendedPage.reason)
                }
              : null,
            actions: sanitizedActions.length > 0 ? sanitizedActions : [
              { label: "Connect with Our Experts", action: "open_modal" },
              { label: "Chat on WhatsApp", href: "https://wa.me/919250592505" }
            ],
            source: "ai_engine"
          });
        }
      } catch (groqErr) {
        console.warn("Groq AI execution error, falling back to smart router:", groqErr);
      }
    }

    // 2. High-speed Contextual Knowledge & Page Navigation Router (Zero Latency Fallback)
    const normalized = message.toLowerCase();
    const matchedKnowledge = findBestKnowledgeAnswer(message);

    // Find best matching site route
    let matchedRoute = VMC_SITEMAP_ROUTES.find((r) =>
      r.keywords.some((kw) => normalized.includes(kw))
    );

    if (!matchedRoute && matchedKnowledge.actions) {
      const hrefAction = matchedKnowledge.actions.find((a) => a.href && a.href.startsWith("/"));
      if (hrefAction?.href) {
        matchedRoute = VMC_SITEMAP_ROUTES.find((r) => r.url === hrefAction.href);
      }
    }

    return NextResponse.json({
      reply: matchedKnowledge.response,
      title: matchedKnowledge.title,
      recommendedPage: matchedRoute
        ? {
            title: matchedRoute.title,
            url: matchedRoute.url,
            reason: matchedRoute.description
          }
        : null,
      actions: matchedKnowledge.actions || [
        { label: "Connect with Our Experts", action: "open_modal" },
        { label: "Chat on WhatsApp", href: "https://wa.me/919250592505" }
      ],
      source: "knowledge_engine"
    });
  } catch (error) {
    console.error("Chatbot API error:", error);
    return NextResponse.json(
      { error: "Failed to process chat message" },
      { status: 500 }
    );
  }
}

'use client';

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  Bot, X, Send, Sparkles, ArrowRight, 
  ExternalLink, ChevronDown, Compass, Zap
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

interface RecommendedPage {
  title: string;
  url: string;
  reason?: string;
}

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  recommendedPage?: RecommendedPage | null;
  actions?: Array<{ label: string; href?: string; action?: string }>;
  source?: "groq" | "knowledge_engine";
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const { openModal } = useModal();
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const messageCounterRef = useRef(0);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "👋 Hi! I'm VMC Media's AI Growth Consultant. How can I help scale your customer acquisition, AI automation, or digital marketing today?",
      timestamp: "Just now",
      actions: [
        { label: "🤖 AI Voicebots & Calling", action: "ask_voicebot" },
        { label: "📈 Google Ads & PPC (4.2x ROAS)", action: "ask_ppc" },
        { label: "💬 AIWA WhatsApp CRM SaaS", action: "ask_aiwa" },
        { label: "🔍 SEO & Map Domination", action: "ask_seo" },
        { label: "📞 Connect with Experts", action: "open_modal" }
      ]
    }
  ]);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen, messages]);

  const handleSend = async (userText?: string) => {
    const textToSend = userText || input;
    if (!textToSend.trim() || isTyping) return;

    messageCounterRef.current += 1;
    const userSeq = messageCounterRef.current;

    const userMsg: ChatMessage = {
      id: `user-${userSeq}`,
      sender: "user",
      text: textToSend.trim(),
      timestamp: "Just now"
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          conversationHistory: messages.slice(-4)
        })
      });

      const data = await res.json();
      messageCounterRef.current += 1;
      const botSeq = messageCounterRef.current;

      const botReply: ChatMessage = {
        id: `bot-${botSeq}`,
        sender: "bot",
        text: data.reply || "I'd be glad to help with that! Would you like to connect with one of our growth experts directly?",
        timestamp: "Just now",
        recommendedPage: data.recommendedPage || null,
        actions: data.actions || [
          { label: "Connect with Our Experts", action: "open_modal" },
          { label: "Chat on WhatsApp", href: "https://wa.me/919250592505" }
        ],
        source: data.source
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      console.error("Chat error:", err);
      messageCounterRef.current += 1;
      const errSeq = messageCounterRef.current;

      setMessages((prev) => [
        ...prev,
        {
          id: `err-${errSeq}`,
          sender: "bot",
          text: "Thanks for reaching out! You can connect with our team directly for immediate assistance.",
          timestamp: "Just now",
          actions: [
            { label: "Connect with Our Experts", action: "open_modal" },
            { label: "WhatsApp: +91 92505 92505", href: "https://wa.me/919250592505" }
          ]
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleActionClick = (action: { label: string; href?: string; action?: string }) => {
    if (action.action === "open_modal") {
      openModal();
    } else if (action.action === "ask_voicebot") {
      handleSend("Take me to the AI Voicebots solution and explain how it handles calls");
    } else if (action.action === "ask_ppc") {
      handleSend("Show me Google Ads management and PPC campaigns for lead generation");
    } else if (action.action === "ask_aiwa") {
      handleSend("How does the AIWA WhatsApp CRM platform work for broadcasting?");
    } else if (action.action === "ask_seo") {
      handleSend("How can VMC Media help our website rank #1 on Google with SEO?");
    }
  };

  return (
    <>
      {/* Floating Chat Trigger Button - Positioned on right side above WhatsApp */}
      <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
        {/* Greeting Message Bubble shown just above chatbot icon when closed */}
        {!isOpen && (
          <div 
            onClick={() => setIsOpen(true)}
            className="mb-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/95 dark:bg-slate-900/95 text-white text-xs font-semibold shadow-xl border border-[#2cd1a1]/40 flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 select-none backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2cd1a1] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2cd1a1]" />
            </span>
            <span>How may I help you?</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open AI Assistant"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#073D7B] to-[#0a56ad] hover:from-[#0a56ad] hover:to-[#073D7B] text-white shadow-xl shadow-[#073D7B]/40 hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-[#2cd1a1]/40 cursor-pointer group"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white transition-transform group-hover:rotate-90 duration-300" />
          ) : (
            <>
              <Bot className="w-7 h-7 text-[#2cd1a1] group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2cd1a1] opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#2cd1a1] border-2 border-slate-900" />
              </span>
            </>
          )}
        </button>
      </div>

      {/* Floating Chat Window Modal */}
      {isOpen && (
        <div 
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[410px] h-[560px] max-h-[calc(100vh-8rem)] bg-card border border-border/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300 ring-1 ring-black/5"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#073D7B] via-[#052e5c] to-slate-900 text-white p-4 flex items-center justify-between border-b border-white/10 shadow-sm">
            <div className="flex items-center gap-3">

              <div className="relative w-10 h-10 rounded-2xl bg-white/10 border border-[#2cd1a1]/40 flex items-center justify-center text-[#2cd1a1]">
                <Bot className="w-6 h-6 text-[#2cd1a1]" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#2cd1a1] ring-2 ring-slate-900" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm text-white">VMC Media Assistant</h3>
                  {/* <Sparkles className="w-3.5 h-3.5 text-[#2cd1a1]" /> */}
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-white/70">
                  {/* <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2cd1a1]" /> */}
                  {/* <span>Online • Instant Solution Navigation</span> */}
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div 
            ref={messagesContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-muted/20 text-foreground text-sm overscroll-contain"
          >
            {messages.map((msg) => {
              const isBot = msg.sender === "bot";
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isBot ? "items-start" : "items-end"} gap-1.5`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-4 py-3 leading-relaxed whitespace-pre-line text-xs sm:text-sm ${
                      isBot
                        ? "bg-card border border-border text-foreground shadow-sm rounded-tl-sm"
                        : "bg-[#073D7B] dark:bg-[#2cd1a1] text-white dark:text-slate-950 font-medium shadow-md rounded-tr-sm"
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Smart Page Navigation Card */}
                  {isBot && msg.recommendedPage && (
                    <div className="w-[90%] bg-gradient-to-r from-primary/10 via-[#2cd1a1]/10 to-transparent border border-[#2cd1a1]/30 rounded-2xl p-3 my-1 shadow-xs">
                      <div className="flex items-start gap-2.5">
                        <div className="w-7 h-7 rounded-xl bg-[#2cd1a1]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#073D7B] dark:text-[#2cd1a1]">
                          <Compass className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mb-0.5">
                            Recommended Destination
                          </p>
                          <h4 className="text-xs font-bold text-foreground truncate">
                            {msg.recommendedPage.title}
                          </h4>
                          {msg.recommendedPage.reason && (
                            <p className="text-[11px] text-muted-foreground line-clamp-2 mt-0.5 leading-snug">
                              {msg.recommendedPage.reason}
                            </p>
                          )}
                          <div className="pt-2">
                            <Link
                              href={msg.recommendedPage.url}
                              target={msg.recommendedPage.url.startsWith("http") ? "_blank" : undefined}
                              rel={msg.recommendedPage.url.startsWith("http") ? "noopener noreferrer" : undefined}
                              onClick={() => {
                                if (!msg.recommendedPage?.url.startsWith("http")) {
                                  setIsOpen(false);
                                }
                              }}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#073D7B] dark:text-[#2cd1a1] hover:underline"
                            >
                              <span>Explore Solution Page</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contextual Action Pills if any */}
                  {isBot && msg.actions && msg.actions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1 max-w-[95%]">
                      {msg.actions.map((act, i) => (
                        act.href ? (
                          <Link
                            key={i}
                            href={act.href}
                            target={act.href.startsWith("http") ? "_blank" : undefined}
                            rel={act.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-all cursor-pointer hover:scale-105 active:scale-95"
                          >
                            <span>{act.label}</span>
                            <ExternalLink className="w-3 h-3 ml-0.5" />
                          </Link>
                        ) : (
                          <button
                            key={i}
                            onClick={() => handleActionClick(act)}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#2cd1a1]/15 hover:bg-[#2cd1a1]/30 text-[#073D7B] dark:text-[#2cd1a1] border border-[#2cd1a1]/30 transition-all cursor-pointer hover:scale-105 active:scale-95"
                          >
                            <span>{act.label}</span>
                            <ArrowRight className="w-3 h-3 ml-0.5" />
                          </button>
                        )
                      ))}
                    </div>
                  )}

                  <span className="text-[10px] text-muted-foreground/60 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground p-2.5 bg-card border border-border rounded-xl w-fit animate-pulse">
                <Zap className="w-4 h-4 text-[#2cd1a1] animate-spin" />
                <span>Finding best solutions & recommendations...</span>
              </div>
            )}
          </div>

          {/* Quick Suggestions & Input Bar */}
          <div className="p-3 bg-card border-t border-border">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about AI voicebots, SEO, Google ads..."
                className="flex-1 bg-muted/60 text-foreground placeholder:text-muted-foreground/70 px-3.5 py-2.5 rounded-xl border border-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2cd1a1] transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                aria-label="Send message"
                className="h-10 w-10 flex items-center justify-center rounded-xl bg-[#2cd1a1] hover:bg-[#27b98f] text-slate-950 font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95 shadow-md cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <p className="text-[10px] text-center text-muted-foreground/60 pt-2">
              VMC Media • AI Growth & Solutions Consulting
            </p>
          </div>
        </div>
      )}
    </>
  );
}

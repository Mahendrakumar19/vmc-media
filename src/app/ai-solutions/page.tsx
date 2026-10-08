import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import LocalSEOStrip from "@/components/LocalSEOStrip";
import CTA from "@/components/CTA";
import Link from "next/link";
import Image from "next/image";
import { 
  Bot, Mic, Zap, MessageSquare, ArrowRight, CheckCircle2, 
  Sparkles, ShieldCheck, ChevronRight, Brain, Clock, Users,
  Workflow, Database, LineChart, Cpu, BarChart3, Radio,
  Send, Layers, ExternalLink
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Solutions & Autonomous Business Automation | VMC Media",
  description: "Enterprise AI solutions by VMC Media: AI Voicebots, WhatsApp AI CRM (AIWA), Autonomous Lead Engines, and Pipeline Sales Automation.",
  alternates: {
    canonical: "https://www.vmcmedia.in/ai-solutions",
  },
  openGraph: {
    title: "AI Solutions & Autonomous Business Automation | VMC Media",
    description: "Convert traffic into qualified pipeline 24/7 with Autonomous Voicebots, WhatsApp AI CRM, and Omnichannel Sales Engines.",
    url: "https://www.vmcmedia.in/ai-solutions",
    siteName: "VMC Media",
    type: "website",
  },
};

export default function AISolutionsOverviewPage() {
  const solutions = [
    {
      title: "AIWA — WhatsApp AI CRM & Revenue OS",
      badge: "Official Meta Cloud API",
      badgeColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
      icon: MessageSquare,
      headline: "Autonomous WhatsApp Sales & Marketing at Scale",
      description: "Convert inbound inquiries and ad clicks instantly into qualified appointments with 0% token markup BYOK multi-model routing, <100ms greeting cache, and visual Kanban CRM.",
      metrics: [
        { label: "Greeting Cache", value: "<100ms" },
        { label: "Token Markup", value: "0% BYOK" },
        { label: "Uptime SLA", value: "99.99%" }
      ],
      features: [
        "BYOK Multi-Model: Gemini 3.6, Claude 3.5, GPT-4o, Groq LLaMA",
        "Meta Ads CAPI & CTWA Auto-Attribution",
        "Multi-Agent Shared Inbox & Chat-to-Call Handover",
        "Official 18% GST Compliant Razorpay Invoicing"
      ],
      href: "/products/aiwa",
      externalHref: "https://aiwa.vmcmedia.in",
      cta: "Explore AIWA Platform"
    },
    {
      title: "Autonomous AI Voicebot (Inbound & Outbound)",
      badge: "Sub-Second Latency",
      badgeColor: "text-blue-500 bg-blue-500/10 border-blue-500/20",
      icon: Mic,
      headline: "60-Second Speed-to-Lead Humanlike Voice Agents",
      description: "Trigger autonomous, ultra-low latency telephone calls the second a lead opts in on Meta or Google Ads. Qualify intent, answer objections, and live-transfer to human closers.",
      metrics: [
        { label: "Speed to Lead", value: "<60s" },
        { label: "Voice Latency", value: "Sub-second" },
        { label: "Call Capacity", value: "10,000+/hr" }
      ],
      features: [
        "Outbound 60-Second Trigger from Google & Meta Webhooks",
        "Inbound AI Receptionist with Smart Call Routing",
        "Calendar & CRM Sync with Instant Slot Booking",
        "Whisper Audio Streaming & Ambient Noise Suppression"
      ],
      href: "/ai-solutions/ai-voicebot",
      cta: "Explore AI Voicebots"
    },
    {
      title: "AI Chatbots & Omnichannel Lead Engines",
      badge: "Multi-Model Intelligence",
      badgeColor: "text-purple-500 bg-purple-500/10 border-purple-500/20",
      icon: Bot,
      headline: "Trained on Your Docs to Capture Buyer Intent 24/7",
      description: "Embed high-conversion AI chat widgets across your website, landing pages, and web apps. Answer complex product queries, capture phone numbers, and book meetings round the clock.",
      metrics: [
        { label: "Availability", value: "24×7×365" },
        { label: "Intent Score", value: "Real-time" },
        { label: "Lead Capture", value: "3.4× Higher" }
      ],
      features: [
        "Enterprise RAG Grounded on Your Catalogs & Pricing Docs",
        "Instant OTP Verification & Lead Enrichment",
        "Seamless Human Escalation when Buyers are Hot",
        "Sub-100ms Responses with Zero Hallucination Guardrails"
      ],
      href: "/ai-solutions/ai-chatbot",
      cta: "Explore AI Chatbots"
    },
    {
      title: "Revenue Pipeline & Sales Automation",
      badge: "Zero Drop-Off",
      badgeColor: "text-amber-500 bg-amber-500/10 border-amber-500/20",
      icon: Zap,
      headline: "End-to-End Pipeline Routing Across All Channels",
      description: "Connect Website Chat, LinkedIn, Google Ads, YouTube, Meta, and WhatsApp into a central autonomous AI engine with automatic follow-up and deal stages.",
      metrics: [
        { label: "Response SLA", value: "<60s" },
        { label: "Channels", value: "6 Unified" },
        { label: "Missed Leads", value: "0%" }
      ],
      features: [
        "Live Kanban CRM: New → Qualified → Follow-up → Won",
        "Dynamic Deal Scoring (Hot 48, Warm 31, Follow-up 17)",
        "Instant Sales Rep Notification via WhatsApp & Email",
        "Zero-Drop-off Automated Drip & Re-engagement Sequences"
      ],
      href: "/ai-solutions/sales-automation",
      cta: "Explore Sales Automation"
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#073D7B]/10 via-background to-background border-b border-border">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#2cd1a1]/15 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2cd1a1]/10 text-[#2cd1a1] border border-[#2cd1a1]/20 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Autonomous Intelligence Suite</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.15]">
            Turn Inquiries into Revenue with <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#073D7B] via-blue-600 to-[#2cd1a1] bg-clip-text text-transparent">
              Autonomous AI Systems
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
            Eliminate missed leads and manual delays. Deploy AI Voicebots, WhatsApp AI CRM, and 24/7 autonomous lead qualification pipelines engineered to respond in under 60 seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#2cd1a1] hover:bg-[#27b98f] text-slate-950 font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-[#2cd1a1]/20 hover:scale-[1.02] transition-all"
            >
              <span>Book an AI Demo Call</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="#suite"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-card hover:bg-muted border border-border text-foreground font-semibold px-7 py-4 rounded-xl text-base transition-all"
            >
              <span>Explore AI Solutions Suite</span>
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto pt-10 border-t border-border/60">
            <div className="p-4 rounded-xl bg-card/60 border border-border/60 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#2cd1a1]">&lt; 60 sec</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Speed-to-Lead Response</div>
            </div>
            <div className="p-4 rounded-xl bg-card/60 border border-border/60 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-foreground">24×7×365</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Autonomous Operations</div>
            </div>
            <div className="p-4 rounded-xl bg-card/60 border border-border/60 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#073D7B] dark:text-blue-400">0%</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Token Markup (BYOK)</div>
            </div>
            <div className="p-4 rounded-xl bg-card/60 border border-border/60 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-500">100%</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Captured Lead Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="suite" className="py-24 bg-background relative border-b border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-4">
              Comprehensive AI Automation Architecture
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Select a specialized AI solution or deploy our end-to-end autonomous revenue engine across your marketing stack.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <div 
                  key={idx}
                  className="bg-card border border-border rounded-3xl p-8 hover:border-[#2cd1a1]/50 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-[#2cd1a1]/10 group-hover:text-[#2cd1a1] transition-all">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${sol.badgeColor}`}>
                        {sol.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {sol.title}
                    </h3>
                    <div className="text-xs font-semibold text-primary mb-3">
                      {sol.headline}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {sol.description}
                    </p>

                    {/* Stats pills */}
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-muted/40 border border-border/50 mb-6 text-center">
                      {sol.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <div className="text-xs text-muted-foreground">{m.label}</div>
                          <div className="font-extrabold text-foreground text-sm mt-0.5">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 mb-8">
                      {sol.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                          <CheckCircle2 className="w-4 h-4 text-[#2cd1a1] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={sol.href}
                      className="inline-flex items-center justify-between flex-1 p-4 rounded-xl bg-muted/60 hover:bg-primary hover:text-white text-foreground font-semibold text-sm transition-all group-hover:shadow-md"
                    >
                      <span>{sol.cta}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    {sol.externalHref && (
                      <a
                        href={sol.externalHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-xl bg-[#2cd1a1]/10 hover:bg-[#2cd1a1] text-[#2cd1a1] hover:text-slate-950 border border-[#2cd1a1]/30 font-semibold transition-all"
                        title="Launch Live App"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Omnichannel Visual Architecture */}
      <section className="py-20 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2cd1a1]/10 text-[#2cd1a1] text-xs font-bold uppercase mb-4">
                <Workflow className="w-3.5 h-3.5" />
                <span>Centralized Engine</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6 leading-tight">
                How Our Omnichannel AI Engine Multiplies Conversions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Instead of treating website chat, social ads, and phone calls as isolated tools, VMC Media connects them into an autonomous nervous system that captures, qualifies, scores, and transfers leads in real time.
              </p>

              <div className="space-y-3.5">
                {[
                  { title: "Zero Lead Drop-Off", desc: "No lead is left waiting. Inbound leads are contacted in under 60 seconds." },
                  { title: "Dynamic Lead Scoring", desc: "AI ranks leads as Hot (Ready to Buy), Warm (Nurturing), or Cold." },
                  { title: "Live Human Rep Handoff", desc: "When high-ticket intent is detected, calls and chats route to human closers instantly." },
                  { title: "Automated Drip Follow-ups", desc: "WhatsApp & SMS sequences automatically re-engage dormant prospects." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-card border border-border">
                    <CheckCircle2 className="w-5 h-5 text-[#2cd1a1] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-foreground text-sm">{item.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl bg-card p-3">
              <Image 
                src="/omnichannel-ai-lead-engine.jpg"
                alt="Omnichannel AI Lead Engine Architecture - VMC Media"
                width={700}
                height={500}
                className="w-full h-auto rounded-2xl object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#2cd1a1]">Omnichannel Ingestion</div>
                  <div className="text-sm font-bold">Chat • Voice • WhatsApp • Ads CRM</div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-md bg-[#2cd1a1]/20 text-[#2cd1a1] font-mono font-bold">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#073D7B] to-slate-900 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to Automate Your Inquiries and Revenue?
          </h2>
          <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            See our autonomous Voicebot and AIWA WhatsApp CRM in action with a custom live walkthrough using your business data.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#2cd1a1] hover:bg-[#27b98f] text-slate-950 font-bold px-8 py-4 rounded-xl text-base shadow-xl hover:scale-105 transition-all"
          >
            <span>Book Your AI Demo</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <ContactSection />
      <LocalSEOStrip />
      <CTA />
      <Footer />
    </main>
  );
}

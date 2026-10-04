import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { 
  MessageSquare, ExternalLink, CheckCircle2, Cpu, IndianRupee, 
  Users, Layers, ShieldCheck, ArrowRight, Sparkles, Smartphone,
  Zap, Database, BellRing, Gauge, Bot, ChevronRight
} from "lucide-react";
import Link from "next/link";

import Header from "@/components/Header";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "AIWA - WhatsApp-First CRM & Autonomous Revenue OS | VMC Media",
  description: "Official WhatsApp Cloud API, Multi-Agent Shared Inbox, Multi-LLM BYOK Automation (Gemini/GPT-4o), Visual Kanban Pipeline, and Instant GST Invoicing on WhatsApp.",
  alternates: {
    canonical: "https://www.vmcmedia.in/products/aiwa",
  },
};

export default function AIWAProductPage() {
  const highlights = [
    {
      title: "Shared Team Inbox",
      desc: "Assign incoming chats to support, billing, or sales agents with smart load balancing, internal notes, and tagging.",
      icon: Users,
      badge: "Team Collab"
    },
    {
      title: "Multi-LLM BYOK Engine",
      desc: "Bring your own API key for Google Gemini 1.5, OpenAI GPT-4o, or Claude 3.5 Sonnet to train your custom sales bot.",
      icon: Cpu,
      badge: "Zero Markup"
    },
    {
      title: "GST Invoicing & Payments",
      desc: "Instant Razorpay & UPI payment links generated with compliant GST calculation and dispatched right inside the chat.",
      icon: IndianRupee,
      badge: "Fintech Ready"
    },
    {
      title: "Kanban Pipeline CRM",
      desc: "Visualize deal stages from enquiry to closure. Move deals across custom stages and trigger instant automated nudges.",
      icon: Layers,
      badge: "Visual Funnel"
    },
    {
      title: "Official Meta Cloud API",
      desc: "Tier-2 & Tier-3 verified Meta Business partner infrastructure ensuring maximum deliverability and 0% risk of ban.",
      icon: ShieldCheck,
      badge: "Meta Verified"
    },
    {
      title: "Sub-100ms Architecture",
      desc: "Engineered with dedicated cloud database isolation for lightning-fast webhook ingestion and real-time lead dispatch.",
      icon: Gauge,
      badge: "High Performance"
    }
  ];

  const comparison = [
    { feature: "Meta Cloud API (Anti-Ban Guarantee)", aiwa: "Yes (Tier-2 Official)", legacy: "No (Unofficial Webhooks)" },
    { feature: "Multi-Agent Shared Inbox", aiwa: "Unlimited Agents with Routing", legacy: "Single Phone / Limited" },
    { feature: "AI Model Support", aiwa: "Gemini 1.5, GPT-4o, Claude 3.5 (BYOK)", legacy: "Rigid static decision trees" },
    { feature: "GST Invoicing & Razorpay UPI", aiwa: "Built-in 1-Click WhatsApp Billing", legacy: "Requires separate manual software" },
    { feature: "Visual Kanban Sales Pipeline", aiwa: "Full Drag-and-Drop Stages", legacy: "Plain chat list only" },
    { feature: "Dedicated High-Throughput DB", aiwa: "Dedicated Cloud Postgres", legacy: "Shared multi-tenant blackbox" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#2cd1a1]/5 via-background to-background">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#2cd1a1]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2cd1a1]/10 border border-[#2cd1a1]/20 text-[#2cd1a1] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#2cd1a1]" />
            <span>AIWA Platform • Live Subdomain Deployment</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            The WhatsApp-First CRM &amp; <br />
            <span className="bg-gradient-to-r from-[#2cd1a1] via-teal-400 to-primary bg-clip-text text-transparent">
              Autonomous Revenue Operating System
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Empower your sales, marketing, and support teams to convert every inbound enquiry into revenue with multi-agent inbox, multi-LLM AI automation, GST billing, and real-time CRM synchronization.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://aiwa.vmcmedia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#2cd1a1] hover:bg-[#27b98f] text-white font-bold text-base shadow-xl shadow-[#2cd1a1]/20 hover:scale-105 active:scale-95 transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Launch App (aiwa.vmcmedia.in)</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-card border border-border hover:bg-muted font-bold text-base text-foreground transition-all"
            >
              <span>Schedule Enterprise Setup</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Platform status pill */}
          <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 bg-muted/60 rounded-xl border border-border text-xs text-muted-foreground">
            <span>Official Application: <strong className="text-foreground">aiwa.vmcmedia.in</strong></span>
            <span>•</span>
            <span className="text-[#2cd1a1] font-medium">Meta Cloud API Tier-2 Verified</span>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight">Everything You Need to Scale on WhatsApp</h2>
            <p className="text-muted-foreground mt-3">From speed-to-lead qualification to billing and post-sale retention.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-[#2cd1a1]/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#2cd1a1]/10 text-[#2cd1a1] flex items-center justify-center">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-muted border border-border text-muted-foreground">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AIWA vs Legacy CRMs Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#2cd1a1] uppercase tracking-wider">Competitive Advantage</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1">Why High-Growth Teams Choose AIWA</h2>
          </div>

          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-12 bg-muted/80 p-4 border-b border-border text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <div className="col-span-5 sm:col-span-6">Capability</div>
              <div className="col-span-4 sm:col-span-3 text-[#2cd1a1]">AIWA (vmcmedia.in)</div>
              <div className="col-span-3 text-muted-foreground">Legacy CRMs</div>
            </div>

            <div className="divide-y divide-border text-sm">
              {comparison.map((row, i) => (
                <div key={i} className="grid grid-cols-12 p-4 items-center hover:bg-muted/30 transition-colors">
                  <div className="col-span-5 sm:col-span-6 font-medium text-foreground pr-2">{row.feature}</div>
                  <div className="col-span-4 sm:col-span-3 font-semibold text-[#2cd1a1] flex items-center gap-1.5 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>{row.aiwa}</span>
                  </div>
                  <div className="col-span-3 text-muted-foreground text-xs">{row.legacy}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://aiwa.vmcmedia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#2cd1a1] hover:bg-[#27b98f] text-white font-bold text-sm shadow-lg hover:scale-105 transition-all"
            >
              <span>Get Started on aiwa.vmcmedia.in</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}

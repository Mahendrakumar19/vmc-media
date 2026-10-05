import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { 
  MessageSquare, ExternalLink, CheckCircle2, Cpu, IndianRupee, 
  Users, Layers, ShieldCheck, ArrowRight, Sparkles, Smartphone,
  Zap, Database, BellRing, Gauge, Bot, ChevronRight, Workflow,
  Send, BarChart3, Lock, RefreshCw, Key, ShoppingCart, Headset,
  FileCheck2, ShieldAlert, Mic, Flame, Clock, Radio, Activity,
  FileText, Check, Award, Play, ChevronDown, CheckCircle, TrendingUp, Building2,
  GraduationCap, Landmark, Heart
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import CTA from "@/components/CTA";
import LocalSEOStrip from "@/components/LocalSEOStrip";

export const metadata: Metadata = {
  title: "AIWA Features — Autonomous WhatsApp AI CRM & Revenue OS | VMC Media",
  description: "Explore the full enterprise feature suite of AIWA: BYOK multi-model AI routing with 0% token markup, <100ms 0-token greeting cache, Retell & ElevenLabs Voice AI, Meta Ads OS & CAPI sync, Universal Lead Hub, 18% GST billing with Razorpay UPI, and visual Kanban sales pipelines.",
  alternates: {
    canonical: "https://www.vmcmedia.in/products/aiwa",
  },
  openGraph: {
    title: "AIWA Platform Features — Enterprise WhatsApp AI CRM & Revenue OS",
    description: "Convert WhatsApp enquiries into revenue with BYOK Multi-LLM AI routing (0% markup), Retell Voice AI, Meta Ads CAPI sync, visual Kanban CRM, and 18% GST invoicing.",
    url: "https://www.vmcmedia.in/products/aiwa",
    siteName: "VMC Media",
    type: "website",
    images: [
      {
        url: "https://www.vmcmedia.in/about-vmc-agency.png",
        width: 1200,
        height: 630,
        alt: "AIWA WhatsApp CRM Platform Features",
      },
    ],
  },
};

export default function AIWAProductPage() {
  const telemetryStats = [
    { value: "<50ms", label: "Webhook Dispatch", sub: "Ultra-fast Meta Cloud event ingestion" },
    { value: "0%", label: "Token Markup", sub: "Verified BYOK direct provider pricing" },
    { value: "<100ms", label: "Greeting Cache", sub: "0-token instant replies to inbound leads" },
    { value: "<1s", label: "Auto-Failover", sub: "Gemini 3.6 → Groq LLaMA 3.3 in 84ms" },
    { value: "99.99%", label: "Uptime SLA", sub: "Enterprise multi-region VPC resilience" },
  ];

  const corePillars = [
    {
      title: "BYOK Multi-Model AI Routing (0% Markup)",
      category: "Autonomous Intelligence",
      desc: "Connect your own API keys for Google Gemini 3.6, OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Groq LLaMA 3.3, and DeepSeek R1. Pay zero vendor token markups with sub-1s self-healing failover and grounded enterprise RAG.",
      icon: Cpu,
      badge: "0% Token Markup",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      features: [
        "Sub-1s auto-failover: Gemini 3.6 → Groq LLaMA in 84ms",
        "0-Token Greeting Cache: Instant catalog reply in <100ms",
        "Private document & catalog grounding (PDF/Docs RAG)",
        "Hindi + English + Hinglish natural language understanding"
      ]
    },
    {
      title: "Multi-Provider Voice AI (Retell + ElevenLabs)",
      category: "Autonomous Voice",
      desc: "Deploy human-like conversational voice agents that dial prospects, answer inbound phone calls, generate real-time transcripts, run sentiment analysis, and record WhatsApp follow-ups with sub-310ms latency.",
      icon: Mic,
      badge: "Sub-310ms Latency",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      features: [
        "Native Indian accent & Hindi/English bilingual voice agents",
        "Automated call transcription & WhatsApp audio notes",
        "Real-time sentiment scoring & buyer temperature tags",
        "1-click transfer to human sales reps upon qualification"
      ]
    },
    {
      title: "Meta Ads OS & CAPI Offline Conversion Sync",
      category: "Growth & Ad Optimization",
      desc: "Direct integration with Meta Cloud API and Ads Manager. Automatically push offline conversion signals (CAPI) when leads progress or pay via WhatsApp, training Meta's algorithm to hunt higher-ticket buyers.",
      icon: Radio,
      badge: "Automated CAPI",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      features: [
        "Click-to-WhatsApp ad attribution & source tracking",
        "Autonomous CAPI offline conversion synchronization",
        "Instant lead ingestion from Meta Instant Lead Forms (<2s)",
        "ROAS attribution tracking from ad click to closed invoice"
      ]
    },
    {
      title: "Shared Multi-Agent Team Inbox",
      category: "Customer Operations",
      desc: "Connect unlimited customer support, sales, and billing reps to a single official WhatsApp Business number. Prevent collision with live typing badges, private internal @mentions, and smart load-balanced distribution.",
      icon: Users,
      badge: "Zero Collision",
      color: "text-[#2cd1a1]",
      bg: "bg-[#2cd1a1]/10",
      features: [
        "Live collision detection prevents double agent replies",
        "Round-robin, skills-based, and load-balanced routing",
        "Internal chat @mentions & private customer deal notes",
        "Keyboard shortcuts & pre-approved quick response templates"
      ]
    },
    {
      title: "Visual Kanban Sales Pipeline CRM",
      category: "Revenue Pipeline",
      desc: "Replace chaotic spreadsheets with a high-velocity visual Kanban deals funnel. Drag and drop leads between stages, automate reminders, calculate pipeline value forecasts, and monitor agent conversion rates.",
      icon: Layers,
      badge: "Visual Funnel",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      features: [
        "Customizable deal stages (Lead, Qualified, Demo, Proposal, Won)",
        "Real-time buyer intent scores (HOT 🔥 / Warm / Cold)",
        "Automated sequence triggers on deal stage movements",
        "Customer 360 profile with complete interaction timeline"
      ]
    },
    {
      title: "18% GST Invoicing & Razorpay UPI Matrix",
      category: "Fintech & Billing",
      desc: "Close high-ticket sales without leaving WhatsApp. Instantly generate compliant tax invoices with automatic HSN/SAC code calculation, CGST/SGST/IGST breakdown, and 1-click Razorpay UPI checkout links.",
      icon: IndianRupee,
      badge: "1-Click Checkout",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      features: [
        "Automated 18% GST tax calculation with HSN/SAC codes",
        "Instant branded PDF tax invoice delivery to WhatsApp",
        "Dynamic Razorpay, UPI QR & payment gateway integration",
        "Real-time payment webhook verification & automated receipts"
      ]
    },
    {
      title: "High-Volume Meta Broadcast Campaigns",
      category: "Marketing Automation",
      desc: "Launch targeted marketing broadcasts to thousands of opted-in customers with 98% open rates using pre-approved Meta HSM templates. Segment by past spend, city, or CRM deal stage with zero number ban risk.",
      icon: Send,
      badge: "98% Open Rate",
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
      features: [
        "Pre-approved Meta HSM utility & marketing templates",
        "Dynamic variable personalization (Name, Order, Amount)",
        "Interactive CTA buttons (Quick Reply, URL, Phone Call)",
        "Detailed read-rate, click-through, and response metrics"
      ]
    },
    {
      title: "Universal Inbound Lead Hub (<2s)",
      category: "Omnichannel Ingestion",
      desc: "Aggregate leads from Facebook Ads, Google Forms, Website webhooks, Shopify, and WhatsApp into one centralized engine in under 2 seconds with automatic deduplication and instant AI qualification.",
      icon: Zap,
      badge: "<2s Ingestion",
      color: "text-teal-500",
      bg: "bg-teal-500/10",
      features: [
        "Omnichannel lead deduplication & auto-enrichment",
        "Direct webhooks for Shopify, WooCommerce, and Zapier",
        "Google Sheets bidirectional synchronization",
        "Instant WhatsApp greeting nudge dispatched within 2 seconds"
      ]
    },
    {
      title: "Developer REST APIs & Telemetry Engine",
      category: "Enterprise Infrastructure",
      desc: "Architected for scale on dedicated cloud database instances with sub-50ms webhook dispatch, comprehensive REST APIs, role-based access control (RBAC), and SOC2 & GDPR compliant data security.",
      icon: Database,
      badge: "99.99% SLA",
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      features: [
        "Sub-50ms real-time event webhooks for enterprise ERPs",
        "Complete REST APIs for messaging, contacts, and deal sync",
        "Bank-grade AES-256 data vault and TLS 1.3 encryption",
        "Executive SLA resolution heatmaps & team speed telemetry"
      ]
    }
  ];

  const lifecycleSteps = [
    {
      step: "01",
      title: "Lead Inbound",
      desc: "Prospect clicks WhatsApp Click-to-Chat ad, submits website form, or scans QR code.",
      icon: MessageSquare,
      time: "0s"
    },
    {
      step: "02",
      title: "0-Token Greeting",
      desc: "Instant catalog reply dispatches in <100ms with zero token cost via cached responder.",
      icon: Zap,
      time: "<100ms"
    },
    {
      step: "03",
      title: "AI Intent Scoring",
      desc: "Multi-LLM BYOK engine evaluates customer intent and tags buyer score (HOT 🔥 / Warm).",
      icon: Bot,
      time: "<1s"
    },
    {
      step: "04",
      title: "Kanban Auto-Creation",
      desc: "Creates a deal card on your sales Kanban board with extracted budget and custom fields.",
      icon: Layers,
      time: "Instant"
    },
    {
      step: "05",
      title: "Agent Assignment",
      desc: "Round-robin engine routes high-intent lead to available senior sales consultant.",
      icon: Users,
      time: "Instant"
    },
    {
      step: "06",
      title: "Voice AI Call (Retell / ElevenLabs)",
      desc: "Triggers AI voice phone call with native Hindi/English voices to confirm appointment.",
      icon: Mic,
      time: "Automated"
    },
    {
      step: "07",
      title: "Automated GST Invoice",
      desc: "Generates 18% GST tax invoice and Razorpay UPI link directly inside WhatsApp chat.",
      icon: IndianRupee,
      time: "1-Click"
    },
    {
      step: "08",
      title: "24/7 Retention Engine",
      desc: "AI auto-responder handles post-purchase queries and triggers scheduled broadcast drips.",
      icon: RefreshCw,
      time: "24/7"
    }
  ];

  const comparison = [
    { 
      feature: "Official Meta Cloud API (Zero Ban Risk)", 
      aiwa: "Official Tier-2 & Tier-3 Partner Architecture", 
      legacy: "Unofficial QR-webhooks (High ban rate)" 
    },
    { 
      feature: "AI Model Flexibility & Token Markup", 
      aiwa: "BYOK Gemini 3.6, GPT-4o, Claude, Groq (0% Markup)", 
      legacy: "Rigid static trees or 300% token SaaS markup" 
    },
    { 
      feature: "Cold-Start Greeting Response", 
      aiwa: "0-Token Greeting Cache (<100ms instant reply)", 
      legacy: "3–6 second LLM cold start latency" 
    },
    { 
      feature: "Multi-Provider Voice AI", 
      aiwa: "Retell + ElevenLabs (sub-310ms, Hindi/English)", 
      legacy: "No voice AI or robotic text-to-speech" 
    },
    { 
      feature: "Meta Ads OS & CAPI Sync", 
      aiwa: "Autonomous offline conversion push back to Ads Manager", 
      legacy: "Manual spreadsheet reconciliation" 
    },
    { 
      feature: "Team Collaboration Inbox", 
      aiwa: "Unlimited Reps with Collision Detection & @Notes", 
      legacy: "4 web sessions max, duplicate replies frequent" 
    },
    { 
      feature: "Fintech & Indian Billing", 
      aiwa: "Compliant 18% GST Invoicing + Razorpay UPI in Chat", 
      legacy: "Requires external manual accounting software" 
    },
    { 
      feature: "Visual Deals Funnel", 
      aiwa: "Drag-and-Drop Kanban with Stage Automation", 
      legacy: "Flat chronological message stream only" 
    },
    { 
      feature: "Failover Resilience", 
      aiwa: "Sub-1s Self-Healing Failover (Gemini → Groq in 84ms)", 
      legacy: "Total outage when provider API hiccups" 
    }
  ];

  const featureCategories = [
    {
      title: "AI Platform & Models",
      count: 4,
      items: [
        {
          name: "BYOK Multi-Model Routing",
          tag: "0% Markup",
          desc: "Connect OpenAI, Gemini, Claude, Groq, or DeepSeek API keys directly with zero platform token markups."
        },
        {
          name: "0-Token Greeting Cache",
          tag: "<100ms",
          desc: "Instant catalog replies dispatched to new leads in under 100ms without consuming AI tokens."
        },
        {
          name: "Sub-1s Auto Failover",
          tag: "Self-Healing",
          desc: "Automatic failover between models (e.g. Gemini 3.6 → Groq LLaMA in 84ms) ensures zero downtime."
        },
        {
          name: "Domain-Grounded RAG",
          tag: "Private Docs",
          desc: "Ground AI responses in company PDF brochures, pricing tiers, FAQs, and real-time inventory."
        }
      ]
    },
    {
      title: "Voice AI & Calling",
      count: 3,
      items: [
        {
          name: "Retell Voice AI Agents",
          tag: "Sub-310ms",
          desc: "Human-like conversational voice agents that handle inbound calls, qualify leads, and log call audio."
        },
        {
          name: "ElevenLabs Neural Voices",
          tag: "Hindi + English",
          desc: "Ultra-natural Indian accents with contextual emotion and bilingual switching capability."
        },
        {
          name: "Sentiment & Call Transcripts",
          tag: "Auto-Summaries",
          desc: "Full call transcripts, sentiment scores, and action items synced to WhatsApp contact profile."
        }
      ]
    },
    {
      title: "Sales CRM & Pipeline",
      count: 3,
      items: [
        {
          name: "Visual Kanban Deals Board",
          tag: "Drag & Drop",
          desc: "Organize deals across customizable stages with automated WhatsApp follow-ups upon stage move."
        },
        {
          name: "18% GST Invoicing Matrix",
          tag: "Razorpay UPI",
          desc: "Generate statutory tax invoices with HSN codes, CGST/SGST/IGST, and 1-click UPI checkout links."
        },
        {
          name: "AI Proposal & Quotation Builder",
          tag: "Branded PDF",
          desc: "Build commercial proposals and SOW documents delivered as instant WhatsApp PDF links."
        }
      ]
    },
    {
      title: "Marketing & Growth",
      count: 3,
      items: [
        {
          name: "Meta Broadcast Campaigns",
          tag: "98% Open Rate",
          desc: "Launch high-volume pre-approved Meta HSM template campaigns with interactive buttons."
        },
        {
          name: "Meta Ads OS & CAPI Sync",
          tag: "Offline Conversions",
          desc: "Autonomous conversion push back to Meta Ads Manager to optimize ad spend for closed deals."
        },
        {
          name: "Universal Lead Hub",
          tag: "<2s Ingestion",
          desc: "Omnichannel lead ingestion from Meta Lead Forms, Webhooks, and Google Sheets with zero duplicate leads."
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-emerald-500/20">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-emerald-500/10 via-background to-background">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>AIWA Platform • Flagship Enterprise SaaS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            All Enterprise Capabilities in <br />
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-[#073D7B] bg-clip-text text-transparent">
              One Unified Operating System.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Unify sales, marketing, and customer support on WhatsApp with BYOK multi-model AI routing, Multi-Provider Voice AI (Retell + ElevenLabs), visual Kanban pipelines, Meta Ads CAPI synchronization, and 18% GST billing — all with <strong>0% platform token markup</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://aiwa.vmcmedia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-xl shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Launch Live Platform</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-card border border-border hover:bg-muted font-bold text-base text-foreground transition-all shadow-sm"
            >
              <span>Schedule Enterprise Setup</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Platform status badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
            <div className="px-3.5 py-1.5 bg-muted/80 rounded-lg border border-border flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Official Meta Business Partner Architecture</span>
            </div>
            <div className="px-3.5 py-1.5 bg-muted/80 rounded-lg border border-border flex items-center gap-2">
              <Gauge className="w-4 h-4 text-blue-500" />
              <span>Sub-50ms Webhook Speed</span>
            </div>
            <div className="px-3.5 py-1.5 bg-muted/80 rounded-lg border border-border flex items-center gap-2">
              <Key className="w-4 h-4 text-amber-500" />
              <span>0% Token Markup BYOK</span>
            </div>
            <div className="px-3.5 py-1.5 bg-muted/80 rounded-lg border border-border flex items-center gap-2">
              <Mic className="w-4 h-4 text-purple-500" />
              <span>Retell &amp; ElevenLabs Voice AI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Live Telemetry Ribbon */}
      <section className="py-8 bg-slate-950 text-white border-y border-slate-800">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {telemetryStats.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 font-mono">
                  {item.value}
                </div>
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-500 hidden sm:block">
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive 3-Panel SaaS Workspace Simulator */}
      <section className="py-16 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Live Workspace Preview</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1">Inside the AIWA Revenue Command Center</h2>
            <p className="text-muted-foreground text-sm mt-2">See how conversations, multi-agent collaboration, and CRM pipeline actions converge in real time.</p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-4 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-border gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-foreground">AIWA Revenue Console</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                      Live Meta Cloud Connected
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Official WhatsApp Cloud API Partner Architecture • Enterprise Tier-2 &amp; Tier-3 Verified
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground flex items-center gap-1.5">
                  <Gauge className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Avg Speed: <strong>84ms</strong></span>
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-blue-500" />
                  <span>SOC2 &amp; GDPR Compliant</span>
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-6">
              {/* Col 1: Live Inbox Stream */}
              <div className="lg:col-span-4 bg-muted/40 rounded-2xl p-4 border border-border flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Unified Team Inbox</span>
                    <span className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      Collision-Free (8 Reps)
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-3 rounded-xl bg-card border border-emerald-500/40 shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-xs text-foreground">+91 98112 04910</span>
                        <span className="text-[10px] text-emerald-600 font-medium">Just now</span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-1">"Please share the brochure and commercial quotation for Noida Sec-62."</p>
                      <div className="flex items-center gap-1.5 mt-2">
                        <span className="text-[9px] bg-emerald-500/10 text-emerald-600 px-1.5 py-0.5 rounded font-medium">HOT 🔥 Lead</span>
                        <span className="text-[9px] bg-blue-500/10 text-blue-600 px-1.5 py-0.5 rounded font-medium">Meta Ads Inbound</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-card/60 border border-border">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-xs text-foreground">+91 99201 88312</span>
                        <span className="text-[10px] text-muted-foreground">3m ago</span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-1">"Payment received! Automated 18% GST receipt sent."</p>
                      <div className="flex items-center gap-1.5 mt-2">
                        <span className="text-[9px] bg-amber-500/10 text-amber-600 px-1.5 py-0.5 rounded font-medium">GST Invoiced</span>
                        <span className="text-[9px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded">Razorpay UPI</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-card/60 border border-border">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-xs text-foreground">+91 97003 44109</span>
                        <span className="text-[10px] text-muted-foreground">11m ago</span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-1">"Voice AI Call Completed: Retell Hindi Voice summary attached."</p>
                      <div className="flex items-center gap-1.5 mt-2">
                        <span className="text-[9px] bg-purple-500/10 text-purple-600 px-1.5 py-0.5 rounded font-medium">Retell Voice Call</span>
                        <span className="text-[9px] bg-teal-500/10 text-teal-600 px-1.5 py-0.5 rounded font-medium">Sentiment: Positive</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                  <span>Routing Protocol</span>
                  <span className="font-semibold text-foreground">Round-Robin &amp; Auto-Balanced</span>
                </div>
              </div>

              {/* Col 2: Active Chat Simulator */}
              <div className="lg:col-span-5 bg-card rounded-2xl border border-border p-4 flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                        V
                      </div>
                      <div>
                        <div className="text-xs font-bold text-foreground">Vipin Chauhan (Green Boulevard Inbound)</div>
                        <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">● AI Auto-Pilot: Gemini 3.6 BYOK (84ms)</div>
                      </div>
                    </div>
                    <span className="text-[10px] bg-muted px-2 py-0.5 rounded border border-border">Budget: ₹2.5 Cr</span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="bg-muted/80 p-2.5 rounded-xl rounded-tl-none max-w-[88%]">
                      "Hi! We run a manufacturing facility and want performance marketing + WhatsApp automation for our commercial distributor network."
                    </div>
                    <div className="bg-emerald-600 text-white p-2.5 rounded-xl rounded-tr-none max-w-[88%] ml-auto shadow-sm">
                      Hello Vipin! <strong>VMC Media</strong> powers manufacturing and high-ticket B2B operations with AIWA. You get 24/7 automated inquiry capture, 0-token greeting cache, Retell Voice AI callbacks, and automated 18% GST invoice generation directly inside WhatsApp.
                    </div>
                    <div className="bg-muted/80 p-2.5 rounded-xl rounded-tl-none max-w-[88%]">
                      "Can you initiate an AI voice demo and share your consultation pricing?"
                    </div>
                    <div className="bg-emerald-600 text-white p-2.5 rounded-xl rounded-tr-none max-w-[88%] ml-auto shadow-sm">
                      Done! I've scheduled a live consultation for Tomorrow at 11:30 AM at our office: <strong>Regus, Level-5, Tower C, Green Boulevard, Sector-62, Noida</strong>. Our Retell AI voice agent will call you in 2 minutes for confirmation!
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border flex items-center gap-2">
                  <div className="flex-1 bg-muted px-3 py-2 rounded-xl text-xs text-muted-foreground flex items-center gap-1.5">
                    <Bot className="w-3.5 h-3.5 text-emerald-500" />
                    <span>AIWA BYOK Multi-LLM handling thread...</span>
                  </div>
                  <button className="px-3.5 py-2 bg-emerald-600 text-white rounded-xl text-xs font-semibold hover:bg-emerald-500 transition-colors">
                    Take Over
                  </button>
                </div>
              </div>

              {/* Col 3: Instant Pipeline & GST Action */}
              <div className="lg:col-span-3 bg-muted/40 rounded-2xl p-4 border border-border flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-3">Live CRM Actions</span>

                  <div className="space-y-2.5">
                    <div className="p-2.5 bg-card rounded-xl border border-border">
                      <span className="text-[11px] text-muted-foreground block">Deals Kanban Stage</span>
                      <span className="text-xs font-bold text-foreground flex items-center gap-1.5 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        Meeting Scheduled (HOT 🔥)
                      </span>
                    </div>

                    <div className="p-2.5 bg-card rounded-xl border border-border">
                      <span className="text-[11px] text-muted-foreground block">Meta CAPI Sync</span>
                      <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mt-0.5">
                        <Check className="w-3 h-3" /> Offline Lead Event Sent
                      </span>
                    </div>

                    <div className="p-2.5 bg-card rounded-xl border border-border">
                      <span className="text-[11px] text-muted-foreground block">Instant GST Invoicing</span>
                      <button className="w-full mt-1.5 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 font-semibold rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors border border-amber-500/30">
                        <IndianRupee className="w-3.5 h-3.5" />
                        Generate Invoice &amp; UPI Link
                      </button>
                    </div>

                    <div className="p-2.5 bg-card rounded-xl border border-border">
                      <span className="text-[11px] text-muted-foreground block">Voice AI Callback</span>
                      <span className="text-[11px] font-medium text-foreground block mt-0.5">
                        Retell AI • Hindi Agent Triggered
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://aiwa.vmcmedia.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full py-2 bg-foreground text-background text-xs font-semibold rounded-xl text-center flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity"
                >
                  <span>Open Full Application</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8-Step Automated Customer Journey Engine */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20">
              Automation Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-4 mb-4">
              8-Step Automated Customer Journey Engine
            </h2>
            <p className="text-muted-foreground text-base">
              From the initial Click-to-WhatsApp ad click to instant payment, automated GST invoicing, and 24/7 retention — every touchpoint operates autonomously.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifecycleSteps.map((item, idx) => {
              const StepIcon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                        <StepIcon className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-bold text-slate-400 bg-muted px-2 py-0.5 rounded">
                          {item.time}
                        </span>
                        <span className="text-xs font-black font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                          {item.step}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9 Core Feature Pillars Grid */}
      <section className="py-20 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20">
              Enterprise Feature Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-4 mb-4">
              9 Core Enterprise Product Pillars
            </h2>
            <p className="text-muted-foreground text-base">
              Built directly on official Meta Cloud API architecture to give high-growth teams maximum speed, 0% token markup, and bank-grade data security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-2xl p-7 shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl ${pillar.bg} ${pillar.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-muted border border-border text-muted-foreground font-mono">
                        {pillar.badge}
                      </span>
                    </div>

                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                      {pillar.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-1 mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-border/60">
                      {pillar.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-foreground/85">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border/50">
                    <a
                      href="https://aiwa.vmcmedia.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      <span>Explore This Capability</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Catalog Explorer Categories */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Modular Breakdown</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-3 mb-4">
              Explore All 40+ Enterprise Capabilities
            </h2>
            <p className="text-muted-foreground text-sm">
              Discover every module powering autonomous customer engagement across your organization.
            </p>
          </div>

          <div className="space-y-8">
            {featureCategories.map((cat, cIdx) => (
              <div key={cIdx} className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <h3 className="text-xl font-bold text-foreground">{cat.title}</h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                    {cat.count} modules
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cat.items.map((item, iIdx) => (
                    <div key={iIdx} className="p-4 rounded-2xl bg-muted/30 border border-border/60 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-foreground">{item.name}</span>
                        <span className="text-[9px] font-mono font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="py-20 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Architectural Advantage</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1">Why Fast-Growing Businesses Choose AIWA</h2>
            <p className="text-muted-foreground text-sm mt-2">A clear side-by-side comparison against legacy software and unofficial bots.</p>
          </div>

          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-12 bg-muted/90 p-4 border-b border-border text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <div className="col-span-5 sm:col-span-5">Feature &amp; Capability</div>
              <div className="col-span-4 sm:col-span-4 text-emerald-600 dark:text-emerald-400">AIWA Platform</div>
              <div className="col-span-3 sm:col-span-3 text-muted-foreground">Traditional CRMs</div>
            </div>

            <div className="divide-y divide-border text-xs sm:text-sm">
              {comparison.map((row, i) => (
                <div key={i} className="grid grid-cols-12 p-4 items-center hover:bg-muted/30 transition-colors">
                  <div className="col-span-5 sm:col-span-5 font-medium text-foreground pr-2">{row.feature}</div>
                  <div className="col-span-4 sm:col-span-4 font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                    <span>{row.aiwa}</span>
                  </div>
                  <div className="col-span-3 sm:col-span-3 text-muted-foreground text-xs">{row.legacy}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://aiwa.vmcmedia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all"
            >
              <span>Explore All Capabilities in App</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Local SEO Cities Strip */}
      <LocalSEOStrip />

      <CTA />
      <Footer />
    </main>
  );
}

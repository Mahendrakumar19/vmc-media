'use client';

import { 
  MessageSquare, Zap, Bot, Database, CheckCircle2, 
  ArrowRight, ExternalLink, ShieldCheck, Cpu, Sparkles, 
  Users, Layers, Workflow, IndianRupee, BellRing, Gauge, Share2
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function AIWAShowcaseSection() {
  const { openModal } = useModal();

  const corePillars = [
    {
      title: "Unified Multi-Agent Inbox",
      badge: "Real-time Collaboration",
      icon: Users,
      color: "text-[#2cd1a1]",
      bg: "bg-[#2cd1a1]/10",
      border: "border-[#2cd1a1]/20",
      description: "Manage 10,000+ customer WhatsApp conversations simultaneously. Auto-assign chats by department, agent load, or language preference with zero collision."
    },
    {
      title: "Multi-LLM Engine (BYOK)",
      badge: "Gemini · GPT-4o · Claude",
      icon: Cpu,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      description: "Bring Your Own Key (BYOK) for maximum cost efficiency. Switch between OpenAI GPT-4o, Google Gemini 1.5, or Claude 3.5 Sonnet to train on business docs."
    },
    {
      title: "Instant GST Invoicing & Payments",
      badge: "Razorpay · UPI Links",
      icon: IndianRupee,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      description: "Generate compliant GST bills, calculate itemized tax, and dispatch one-click UPI/Razorpay payment links directly inside the WhatsApp chat thread."
    },
    {
      title: "Visual Kanban Pipeline CRM",
      badge: "Lead to Deal Closing",
      icon: Layers,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      description: "Drag-and-drop deals across customized stages (New, Qualified, Site Visit, Proposal Sent, Won). Trigger automated follow-ups with instant stage transition."
    }
  ];

  const techSpecs = [
    "Official Meta Cloud API (Zero risk of WhatsApp ban)",
    "Isolated High-Throughput Cloud Database Engine",
    "Sub-100ms Webhook Response Architecture",
    "Automated Lead Enrichment from Website Forms & Ads",
    "Interactive WhatsApp Buttons, Lists, and Carousels",
    "Custom Tags, Segment Filters & Broadcast Campaigns"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden" id="aiwa-showcase">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#2cd1a1]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-primary/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2cd1a1]/10 border border-[#2cd1a1]/20 text-[#2cd1a1] text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#2cd1a1]" />
            <span>Introducing Flagship SaaS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15]">
            AIWA: WhatsApp-First CRM &amp; <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#2cd1a1] via-teal-400 to-primary bg-clip-text text-transparent">
              Autonomous Revenue OS
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Stop losing leads in disjointed spreadsheets and delayed emails. AIWA turns your WhatsApp number into an autonomous 24/7 sales department that captures, qualifies, bills, and closes.
          </p>

          {/* Subdomain Access Badge */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://aiwa.vmcmedia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2cd1a1] hover:bg-[#27b98f] text-white font-semibold text-sm shadow-lg shadow-[#2cd1a1]/20 hover:scale-105 transition-all"
            >
              <span>Explore AIWA App (aiwa.vmcmedia.in)</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border hover:bg-muted text-foreground font-semibold text-sm transition-all"
            >
              <span>Schedule Live Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live UI Mockup / Product Simulator */}
        <div className="bg-card/90 backdrop-blur-xl border border-border rounded-3xl p-4 sm:p-8 shadow-2xl mb-16 relative">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-border gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#2cd1a1] text-white flex items-center justify-center font-bold shadow-md">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-foreground">AIWA Dashboard</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#2cd1a1]/10 text-[#2cd1a1] font-semibold border border-[#2cd1a1]/20">
                    Live Meta Cloud Connected
                  </span>
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-2">
                  <span>Cloud Engine: <code className="text-foreground">Meta Cloud API Tier-2</code></span>
                  <span>•</span>
                  <span>Platform: <code className="text-foreground">aiwa.vmcmedia.in</code></span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted text-muted-foreground">
                <Gauge className="w-3.5 h-3.5 text-[#2cd1a1]" />
                <span>Response Speed: <strong>1.2s</strong></span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted text-muted-foreground">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                <span>Meta Cloud Tier-2 Verified</span>
              </div>
            </div>
          </div>

          {/* Simulated 3-Column SaaS Interface */}
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Col 1: Real-time Multi-Agent Chats (4 cols) */}
            <div className="lg:col-span-4 bg-muted/40 rounded-2xl p-4 border border-border flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Unified Inbox (14 Unassigned)</span>
                  <span className="w-2 h-2 rounded-full bg-[#2cd1a1] animate-ping" />
                </div>
                
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-card border border-[#2cd1a1]/40 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-xs text-foreground">+91 98112 04910</span>
                      <span className="text-[10px] text-[#2cd1a1] font-medium">Just now</span>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-1">"Hi, please send the 3BHK brochure and pricing sheet."</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="text-[9px] bg-[#2cd1a1]/10 text-[#2cd1a1] px-1.5 py-0.5 rounded font-medium">AI Qualified</span>
                      <span className="text-[9px] bg-primary/10 text-primary px-1.5 py-0.5 rounded font-medium">Noida Sec-62</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-card/60 border border-border">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-xs text-foreground">+91 99201 88312</span>
                      <span className="text-[10px] text-muted-foreground">3m ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-1">"Payment received! Please share GST invoice PDF."</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="text-[9px] bg-amber-500/10 text-amber-600 px-1.5 py-0.5 rounded font-medium">Invoice Generated</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-card/60 border border-border">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-xs text-foreground">+91 97003 44109</span>
                      <span className="text-[10px] text-muted-foreground">12m ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-1">"Book meeting for tomorrow at 11 AM."</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="text-[9px] bg-blue-500/10 text-blue-600 px-1.5 py-0.5 rounded font-medium">Site Visit Set</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span>Multi-agent sync</span>
                <span className="font-semibold text-foreground">5 Agents Active</span>
              </div>
            </div>

            {/* Col 2: Active Chat Conversation & Multi-LLM Trigger (5 cols) */}
            <div className="lg:col-span-5 bg-card rounded-2xl border border-border p-4 flex flex-col justify-between shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#2cd1a1] text-white flex items-center justify-center text-xs font-bold">
                      A
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground">Amit Sharma (Sector 62 Lead)</div>
                      <div className="text-[10px] text-[#2cd1a1] font-medium">● AI Auto-Pilot: GPT-4o BYOK</div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-muted px-2 py-0.5 rounded border border-border">Budget: ₹1.4 Cr</span>
                </div>

                {/* Chat Bubbles */}
                <div className="space-y-2.5 text-xs">
                  <div className="bg-muted/80 p-2.5 rounded-xl rounded-tl-none max-w-[85%]">
                    Can you share floor plan options and payment schedules for the Noida commercial tower?
                  </div>
                  <div className="bg-[#2cd1a1] text-white p-2.5 rounded-xl rounded-tr-none max-w-[85%] ml-auto shadow-sm">
                    Certainly Amit! Here is the verified brochure PDF and 40:60 construction-linked plan. Would you like me to reserve a site visit slot for this Saturday?
                  </div>
                  <div className="bg-muted/80 p-2.5 rounded-xl rounded-tl-none max-w-[85%]">
                    Yes, Saturday 11 AM works for me.
                  </div>
                  <div className="bg-[#2cd1a1] text-white p-2.5 rounded-xl rounded-tr-none max-w-[85%] ml-auto shadow-sm">
                    Done! Calendar invite dispatched to your WhatsApp. Your dedicated manager <strong>Rahul</strong> will welcome you at Level-5 Tower C.
                  </div>
                </div>
              </div>

              {/* Chat Input simulation */}
              <div className="mt-4 pt-3 border-t border-border flex items-center gap-2">
                <div className="flex-1 bg-muted px-3 py-2 rounded-xl text-xs text-muted-foreground">
                  AIWA Multi-LLM is handling this conversation...
                </div>
                <button className="px-3 py-2 bg-[#2cd1a1] text-white rounded-xl text-xs font-semibold hover:bg-[#27b98f]">
                  Intervene
                </button>
              </div>
            </div>

            {/* Col 3: Kanban Stage & GST Actions (3 cols) */}
            <div className="lg:col-span-3 bg-muted/40 rounded-2xl p-4 border border-border flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-3">Instant CRM Actions</span>
                
                <div className="space-y-2.5">
                  <div className="p-2.5 bg-card rounded-xl border border-border">
                    <span className="text-[11px] text-muted-foreground block">Current Stage</span>
                    <span className="text-xs font-bold text-foreground flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      Site Visit Scheduled
                    </span>
                  </div>

                  <div className="p-2.5 bg-card rounded-xl border border-border">
                    <span className="text-[11px] text-muted-foreground block">GST Invoice Action</span>
                    <button className="w-full mt-1.5 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 font-semibold rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors border border-amber-500/30">
                      <IndianRupee className="w-3.5 h-3.5" />
                      Create Bill &amp; UPI Link
                    </button>
                  </div>

                  <div className="p-2.5 bg-card rounded-xl border border-border">
                    <span className="text-[11px] text-muted-foreground block">Real-time Pipeline Sync</span>
                    <span className="text-[11px] font-medium text-foreground block mt-0.5">
                      Encrypted Cloud Gateway
                    </span>
                    <span className="text-[10px] text-[#2cd1a1] flex items-center gap-1 mt-1">
                      <CheckCircle2 className="w-3 h-3" /> Live Data Stream (0ms lag)
                    </span>
                  </div>
                </div>
              </div>

              <a
                href="https://aiwa.vmcmedia.in"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full py-2 bg-foreground text-background text-xs font-semibold rounded-xl text-center flex items-center justify-center gap-1 hover:opacity-90"
              >
                <span>Open Full CRM</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>

        {/* 4 Feature Value Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {corePillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-card border border-border/80 hover:border-primary/50 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${pillar.bg} ${pillar.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${pillar.bg} ${pillar.color} ${pillar.border}`}>
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60">
                <a
                  href="https://aiwa.vmcmedia.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#2cd1a1] hover:underline flex items-center gap-1.5"
                >
                  <span>Experience in AIWA</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specs Checklist & Deployment Architecture */}
        <div className="bg-muted/40 rounded-3xl p-8 border border-border">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2cd1a1]">Enterprise Infrastructure</span>
              <h3 className="text-2xl font-bold text-foreground">
                Engineered for Scale, Privacy &amp; Reliability
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Unlike unverified third-party scrapers, AIWA operates on official Meta Cloud infrastructure with dedicated high-performance cloud database isolation.
              </p>
              
              <div className="pt-2">
                <a
                  href="https://aiwa.vmcmedia.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2cd1a1] hover:bg-[#27b98f] text-white font-semibold text-xs shadow-md transition-all"
                >
                  <span>Launch SaaS at aiwa.vmcmedia.in</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3.5">
              {techSpecs.map((spec, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-card rounded-xl border border-border/70">
                  <CheckCircle2 className="w-4 h-4 text-[#2cd1a1] flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-foreground">{spec}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

'use client';

import { ArrowRight, Workflow, Database, CalendarCheck, CheckCircle2, Clock, Zap, ShieldAlert, Sparkles, MessageSquare } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Image from "next/image";

const SalesAutomationSection = () => {
  const { openModal } = useModal();

  const metrics = [
    { value: "<60 sec", label: "First reply to every lead", icon: Clock },
    { value: "24×7", label: "Always on, day & night", icon: Zap },
    { value: "48 hrs", label: "Go live — no tech skills needed", icon: Sparkles },
    { value: "0 missed", label: "Every enquiry captured across channels", icon: ShieldAlert },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#2cd1a1]/10 border border-[#2cd1a1]/25 rounded-full mb-6">
            <Workflow className="w-4 h-4 text-[#2cd1a1]" />
            <span className="text-[#2cd1a1] text-xs font-bold tracking-wider uppercase">Smart Automation, Always On</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6 leading-tight tracking-tight">
            One AI engine. Every channel. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2cd1a1] via-teal-400 to-cyan-400">
              Real leads.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Our AI plugs directly into Facebook, Instagram, WhatsApp, Google, LinkedIn, and your website — capturing every lead, replying instantly, and building your revenue pipeline.
          </p>
        </div>

        {/* High-Impact Why VMC Media Telemetry Metrics (From Banner 1 & 2) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-14">
          {metrics.map((m, i) => (
            <div 
              key={i}
              className="bg-card border border-border/80 hover:border-[#2cd1a1]/50 p-5 rounded-2xl shadow-xs transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-black text-[#2cd1a1]">{m.value}</span>
                <m.icon className="w-5 h-5 text-muted-foreground/60" />
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-snug font-medium">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Visual Showcase: Omnichannel AI Lead Engine & Built-in CRM Pipeline Diagram */}
        <div className="max-w-5xl mx-auto mb-16 rounded-3xl overflow-hidden border border-border shadow-2xl relative bg-slate-950 group">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/omnichannel-ai-lead-engine.jpg"
              alt="Omnichannel AI Lead Engine with Built-in CRM Pipeline"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover group-hover:scale-102 transition-transform duration-700"
            />
          </div>
          {/* Overlay info footer */}
          <div className="p-4 sm:p-6 bg-slate-950/90 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black uppercase">
                  Exclusive
                </span>
                <span className="text-sm font-bold text-white">AI Auto Follow-Up &amp; Lead Intent Scoring</span>
              </div>
              <p className="text-xs text-white/70">
                Nudges silent leads on WhatsApp &amp; email until they reply — no lead goes cold.
              </p>
            </div>

            <div className="flex items-center gap-2 self-stretch sm:self-auto">
              <span className="px-3 py-1 rounded-lg bg-rose-500/20 text-rose-400 text-xs font-bold border border-rose-500/30">
                Hot: 48
              </span>
              <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-400 text-xs font-bold border border-amber-500/30">
                Warm: 31
              </span>
              <span className="px-3 py-1 rounded-lg bg-blue-500/20 text-blue-400 text-xs font-bold border border-blue-500/30">
                Follow-Up: 17
              </span>
              <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                Won: 9
              </span>
            </div>
          </div>
        </div>

        {/* Funnel Visualizer */}
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-foreground">Complete End-to-End Pipeline Workflow</h3>
          </div>

          {/* Desktop Funnel (lg screens and up) */}
          <div className="hidden lg:flex justify-between items-center relative px-4">
            <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-primary via-[#2cd1a1] to-secondary -translate-y-1/2 -z-10" />
            
            {[
              { title: "Traffic", subtitle: "SEO & Ads", icon: ArrowRight },
              { title: "Lead", subtitle: "Form / Chat", icon: ArrowRight },
              { title: "AI Response", subtitle: "< 10 Seconds", icon: ArrowRight },
              { title: "Qualification", subtitle: "Budget / Intent", icon: ArrowRight },
              { title: "Appointment", subtitle: "Calendar Sync", icon: CalendarCheck },
              { title: "CRM", subtitle: "Data Logged", icon: Database },
              { title: "Sales", subtitle: "Closed Won", icon: CheckCircle2 }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center group px-1">
                <div className="w-12 h-12 rounded-full bg-card border-2 border-primary text-primary flex items-center justify-center mb-2 shadow-md group-hover:scale-110 transition-transform">
                  <step.icon className="w-5 h-5" />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-xs sm:text-sm text-foreground whitespace-nowrap">{step.title}</h4>
                  <p className="text-[11px] text-muted-foreground whitespace-nowrap">{step.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile & Tablet Funnel (< lg screens) */}
          <div className="lg:hidden space-y-3">
            {[
              { title: "Traffic", subtitle: "Targeted SEO & Ads" },
              { title: "Lead", subtitle: "Captured via Form or Chat" },
              { title: "Instant AI Response", subtitle: "Engaged in under 10 Seconds" },
              { title: "Qualification", subtitle: "Budget & Intent Verified" },
              { title: "Appointment", subtitle: "Direct Calendar Sync" },
              { title: "CRM Sync", subtitle: "HubSpot / Zoho / AIWA Logged" },
              { title: "Sales", subtitle: "Team Closes the Deal" }
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-4 bg-card border border-border p-3.5 rounded-xl shadow-xs">
                <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground">{step.title}</h4>
                  <p className="text-xs text-muted-foreground">{step.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <button 
            onClick={openModal} 
            className="inline-flex items-center justify-center gap-2 bg-[#2cd1a1] hover:bg-[#27b98f] text-slate-950 font-black px-10 py-4 rounded-xl text-sm shadow-xl shadow-[#2cd1a1]/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Let's automate your growth</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default SalesAutomationSection;

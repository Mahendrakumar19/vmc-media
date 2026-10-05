'use client';

import { PhoneCall, ArrowRight, Mic, CheckCircle2, Database, UserCheck, Calendar } from "lucide-react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";

const AIVoicebotSection = () => {
  const { openModal } = useModal();

  const useCases = [
    { title: "Inbound Calls", desc: "Handle routine enquiries automatically." },
    { title: "Lead Qualification", desc: "Ask predefined questions and identify potential customers." },
    { title: "Follow-ups", desc: "Automate repetitive follow-up conversations." },
    { title: "Appointment Booking", desc: "Help customers schedule appointments." },
    { title: "Reminders", desc: "Automate confirmations and reminders." },
    { title: "Customer Feedback", desc: "Conduct surveys and collect responses." }
  ];

  const flowSteps = [
    { title: "CUSTOMER CALL", icon: PhoneCall },
    { title: "AI VOICEBOT", icon: Mic },
    { title: "UNDERSTANDS REQUIREMENT", icon: Calendar },
    { title: "QUALIFIES LEAD", icon: UserCheck },
    { title: "CRM / SALES TEAM", icon: Database }
  ];

  return (
    <section className="py-24 bg-[#F5F7F9] dark:bg-muted/20 text-foreground relative overflow-hidden" id="ai-voicebot">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073D7B]/10 text-[#073D7B] dark:text-[#2cd1a1] text-xs font-bold uppercase tracking-wider mb-4 border border-[#073D7B]/20">
            <Mic className="w-3.5 h-3.5" />
            <span>Smart Voice Automation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            AI Voicebots for Smarter Customer Conversations
          </h2>
          <p className="text-lg font-bold text-[#073D7B] dark:text-[#2cd1a1] mb-4">
            Let AI Handle Routine Conversations. Let Your Team Focus on Business.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            AI Voicebots can automate repetitive customer conversations, helping businesses manage enquiries, qualify leads, follow up with prospects and schedule appointments.
          </p>
        </div>

        {/* 6 Use Cases & Visual Graphic Split */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {useCases.map((uc, i) => (
              <div 
                key={i} 
                className="bg-card border border-border/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all hover:border-[#2cd1a1]/50"
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <CheckCircle2 className="w-5 h-5 text-[#2cd1a1] flex-shrink-0" />
                  <h3 className="font-bold text-sm text-foreground">{uc.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground pl-8">{uc.desc}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-border shadow-2xl bg-slate-950">
            <img
              src="/ai-voicebot-hero.jpg"
              alt="AI Voicebot & Customer Service Illustration with Neural Headset & Transcripts"
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Visual Flow Blueprint */}
        <div className="bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-lg mb-12">
          <h3 className="text-xs font-bold text-center uppercase tracking-wider text-muted-foreground mb-8">
            Autonomous Voice Flow Architecture
          </h3>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2">
            {flowSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto justify-between lg:justify-start">
                <div className="flex flex-col items-center text-center group w-full lg:w-auto">
                  <div className="w-14 h-14 rounded-2xl bg-[#073D7B]/10 dark:bg-[#2cd1a1]/10 text-[#073D7B] dark:text-[#2cd1a1] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-xs text-foreground tracking-tight max-w-[130px]">{step.title}</span>
                </div>

                {/* Arrow in between steps */}
                {idx < flowSteps.length - 1 && (
                  <div className="flex items-center justify-center my-2 lg:my-0 text-[#2cd1a1] px-2">
                    <ArrowRight className="w-6 h-6 text-[#2cd1a1] hidden lg:block animate-pulse" />
                    <ArrowRight className="w-5 h-5 text-[#2cd1a1] rotate-90 lg:rotate-0 block lg:hidden my-1 animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/ai-solutions/ai-voicebot"
            className="inline-flex items-center justify-center gap-2 bg-[#2cd1a1] hover:bg-[#27b98f] text-white font-bold px-8 py-3.5 rounded-xl text-sm shadow-lg hover:scale-105 transition-all"
          >
            <span>Explore AI Voicebot</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AIVoicebotSection;

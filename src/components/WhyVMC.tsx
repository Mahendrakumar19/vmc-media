'use client';

import { Target, Cpu, BarChart3, Users } from "lucide-react";
import Image from "next/image";

const WhyVMC = () => {
  const cards = [
    {
      title: "Business-Focused",
      desc: "We focus on your business objectives, not just marketing activity.",
      icon: Target,
      color: "text-[#073D7B] dark:text-blue-400"
    },
    {
      title: "Digital + AI",
      desc: "Combine digital marketing with AI-powered customer engagement.",
      icon: Cpu,
      color: "text-[#2cd1a1]"
    },
    {
      title: "Data-Driven",
      desc: "Use campaign and customer data to continuously improve performance.",
      icon: BarChart3,
      color: "text-purple-500"
    },
    {
      title: "Human + AI",
      desc: "Automation handles repetitive interactions while your team focuses on important customer relationships.",
      icon: Users,
      color: "text-amber-500"
    }
  ];

  return (
    <section className="py-20 bg-background relative border-t border-border overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Why Businesses Choose VMC Media
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            We believe digital marketing should do more than create visibility. It should create conversations, generate opportunities and contribute to business growth.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, i) => (
            <div 
              key={i} 
              className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#2cd1a1]/50 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 ${card.color} group-hover:scale-110 transition-transform`}>
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[#2cd1a1] transition-colors">{card.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Human + AI Collaboration Hero Visual Banner */}
        <div className="relative w-full aspect-[21/9] sm:aspect-[24/9] rounded-3xl overflow-hidden border border-border shadow-2xl bg-slate-950">
          <Image
            src="/human-ai-collaboration.jpg"
            alt="Human Strategists + AI Collaboration at VMC Media"
            fill
            className="object-cover opacity-90 hover:scale-102 transition-transform duration-700"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex items-end p-6 sm:p-10">
            <div className="max-w-xl space-y-1.5">
              <span className="text-[11px] font-mono font-bold text-[#2cd1a1] uppercase tracking-wider bg-[#2cd1a1]/10 px-3 py-1 rounded-full border border-[#2cd1a1]/30 backdrop-blur-md">
                Synergistic AI Co-Pilot
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Empowering Teams with Strategic Human + AI Synergy
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed hidden sm:block">
                Our team of digital growth experts works side-by-side with autonomous AI agents to deliver maximum ROAS and sub-100ms response speed.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyVMC;

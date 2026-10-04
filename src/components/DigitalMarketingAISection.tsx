'use client';

import { Megaphone, Globe, MessageSquare, Filter, PhoneCall, Database, Sparkles } from "lucide-react";

const DigitalMarketingAISection = () => {
  const flow = [
    { name: "ADVERTISEMENT", icon: Megaphone, desc: "Paid Ads & SEO" },
    { name: "LANDING PAGE", icon: Globe, desc: "High-CRO Page" },
    { name: "AI CHATBOT / WHATSAPP", icon: MessageSquare, desc: "Instant Engagement" },
    { name: "LEAD QUALIFICATION", icon: Filter, desc: "Budget & Intent" },
    { name: "AI VOICEBOT / SALES TEAM", icon: PhoneCall, desc: "Human + Voice AI" },
    { name: "CRM", icon: Database, desc: "Data Synchronized" },
    { name: "BUSINESS OPPORTUNITY", icon: Sparkles, desc: "Deal Closed" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#012766] to-[#073D7B] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2cd1a1]/10 border border-[#2cd1a1]/30 text-[#2cd1a1] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#2cd1a1]" />
            <span>VMC Signature Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6">
            Marketing Gets the Customer's Attention. <br />
            <span className="text-[#2cd1a1]">AI Helps You Continue the Conversation.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            A successful digital campaign should not end when a customer clicks an advertisement. VMC Media connects marketing with customer engagement — helping businesses move from an advertisement to a conversation, from a conversation to a qualified lead, and from a lead to a business opportunity.
          </p>
        </div>

        {/* Visual Flow Blueprint */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          <h3 className="text-xs font-bold text-center uppercase tracking-wider text-[#2cd1a1] mb-8">
            End-to-End Customer Journey Pipeline
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center">
            {flow.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#2cd1a1] flex items-center justify-center mb-3 group-hover:bg-[#2cd1a1] group-hover:text-black transition-all shadow-md">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="font-bold text-[11px] text-white tracking-tight mb-0.5">{item.name}</span>
                <span className="text-[10px] text-white/60">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DigitalMarketingAISection;

'use client';

import { MessageSquare, ArrowRight, CheckCircle2, Bot, Sparkles, User } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Link from "next/link";

const AIChatbotFeatureSection = () => {
  const { openModal } = useModal();

  const capabilities = [
    { title: "Answer", desc: "Respond instantly to frequently asked questions." },
    { title: "Understand", desc: "Identify customer requirements and intent." },
    { title: "Qualify", desc: "Ask the right questions and identify potential leads." },
    { title: "Convert", desc: "Guide customers toward enquiry, appointment or purchase." },
    { title: "Connect", desc: "Hand over conversations to your sales team when human interaction is required." }
  ];

  return (
    <section className="py-24 bg-[#012766] text-white relative overflow-hidden" id="ai-chatbot">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#2cd1a1]/15 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#073D7B]/30 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Text & Capabilities */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2cd1a1]/10 border border-[#2cd1a1]/30 text-[#2cd1a1] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#2cd1a1]" />
              <span>Meet Your AI Chatbot</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              Your Business Can Talk to Customers <span className="text-[#2cd1a1]">24×7</span>
            </h2>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Your customers don't always visit during business hours. An AI chatbot can answer questions, understand customer requirements, qualify leads and guide visitors toward the next step — even when your team is offline.
            </p>

            {/* What it can do list */}
            <div className="space-y-3.5 pt-3">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#2cd1a1] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm block font-bold">{cap.title}</strong>
                    <span className="text-xs text-white/70">{cap.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center gap-2 bg-[#2cd1a1] hover:bg-[#27b98f] text-white font-bold px-7 py-3.5 rounded-xl text-sm shadow-xl transition-all hover:scale-105"
              >
                <span>Build Your AI Chatbot</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all"
              >
                <span>Talk to Our Team</span>
              </Link>
            </div>

          </div>

          {/* Right Realistic Conversation Visual */}
          <div className="lg:col-span-5">
            <div className="bg-[#073D7B]/90 backdrop-blur-xl border border-white/15 rounded-3xl p-6 shadow-2xl space-y-4">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2cd1a1] text-black flex items-center justify-center font-bold shadow-md">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">VMC Assistant</h3>
                    <p className="text-[11px] text-[#2cd1a1] flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#2cd1a1] animate-pulse" />
                      Active 24×7 Lead Qualification
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat Thread */}
              <div className="space-y-3.5 text-xs py-2">
                {/* Customer Msg 1 */}
                <div className="flex gap-2.5 items-start">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none max-w-[85%] border border-white/10 text-white/95">
                    "I need a demo for your service."
                  </div>
                </div>

                {/* AI Msg 1 */}
                <div className="flex gap-2.5 items-start justify-end">
                  <div className="bg-[#2cd1a1] text-black p-3 rounded-2xl rounded-tr-none max-w-[85%] font-medium shadow-md">
                    "Certainly. May I know which solution you are interested in?"
                  </div>
                </div>

                {/* Customer Msg 2 */}
                <div className="flex gap-2.5 items-start">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none max-w-[85%] border border-white/10 text-white/95">
                    "Digital Marketing and AI Chatbot."
                  </div>
                </div>

                {/* AI Msg 2 */}
                <div className="flex gap-2.5 items-start justify-end">
                  <div className="bg-[#2cd1a1] text-black p-3 rounded-2xl rounded-tr-none max-w-[85%] font-medium shadow-md">
                    "Great. I can help you schedule a consultation. What is the best time to contact you?"
                  </div>
                </div>
              </div>

              {/* Input Simulation */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <span>AI handles questions &amp; qualifies leads automatically</span>
                <span className="text-[#2cd1a1] font-bold">● Live</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIChatbotFeatureSection;

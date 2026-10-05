'use client';

import { ArrowRight, CheckCircle2, Bot, Sparkles, User, Zap, ShieldCheck } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Link from "next/link";
import { motion } from "framer-motion";

import Image from "next/image";

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
    <section
      className="py-20 sm:py-24 relative overflow-hidden transition-colors duration-500 border-y border-border/80 bg-background"
      id="ai-chatbot"
    >
      {/* High-Tech Background Image with Adaptive Mode Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/chatbot-bg-dots.jpg"
          alt="AI Chatbot Technology Background"
          fill
          priority={false}
          className="object-cover object-center opacity-35 dark:opacity-45 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Scrim Overlay for Crystal Clear Contrast in both Light & Dark modes */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70 dark:from-slate-950/95 dark:via-slate-950/85 dark:to-slate-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(7,61,123,0.18),transparent_70%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(44,209,161,0.12),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text & Capabilities */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2cd1a1]/10 border border-[#2cd1a1]/30 text-[#2cd1a1] text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#2cd1a1]" />
              <span>Meet Your AI Chatbot</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
              Your Business, Talking to Customers{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2cd1a1] via-teal-500 dark:via-teal-300 to-emerald-600 dark:to-emerald-400">
                24×7
              </span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl font-normal">
              Your customers don't always visit during business hours. An AI
              chatbot can answer questions, understand customer requirements,
              qualify leads and guide visitors toward the next step — even when
              your team is offline.
            </p>

            {/* Capability Cards Grid */}
            <div className="space-y-3 pt-2">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3.5 bg-card/85 dark:bg-white/5 hover:bg-card dark:hover:bg-white/10 p-3.5 rounded-2xl border border-border dark:border-white/10 hover:border-[#2cd1a1]/50 dark:hover:border-[#2cd1a1]/40 backdrop-blur-xl transition-all duration-300 group shadow-xs hover:shadow-md hover:translate-x-1"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#2cd1a1]/15 border border-[#2cd1a1]/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#2cd1a1] transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#2cd1a1] group-hover:text-slate-950 transition-colors" />
                  </div>
                  <div>
                    <strong className="text-foreground dark:text-white text-sm block font-bold group-hover:text-[#2cd1a1] transition-colors">
                      {cap.title}
                    </strong>
                    <span className="text-xs text-muted-foreground dark:text-white/70 leading-normal">{cap.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center gap-2 bg-[#2cd1a1] hover:bg-[#27b98f] text-slate-950 font-black px-8 py-4 rounded-2xl text-sm shadow-xl shadow-[#2cd1a1]/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Build Your AI Chatbot</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-card hover:bg-muted dark:bg-white/10 dark:hover:bg-white/20 border border-border dark:border-white/20 text-foreground dark:text-white font-bold px-8 py-4 rounded-2xl text-sm backdrop-blur-md transition-all hover:border-foreground/30 dark:hover:border-white/40"
              >
                <span>Talk to Our Team</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Floating Chatbot Workspace Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Glow Behind Container */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#2cd1a1]/25 to-[#073D7B]/30 rounded-3xl blur-xl opacity-75" />

            <div className="relative bg-slate-950 text-white border border-slate-800/90 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-5">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#2cd1a1] to-teal-400 text-slate-950 flex items-center justify-center font-bold shadow-lg">
                      <Bot className="w-6 h-6" />
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-950 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">
                      VMC Media Assistant
                    </h3>
                    <p className="text-[11px] text-[#2cd1a1] font-semibold flex items-center gap-1 mt-0.5">
                      <Zap className="w-3 h-3 text-[#2cd1a1] animate-pulse" />
                      Active 24×7 Lead Qualification
                    </p>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold">
                  99.9% Uptime
                </div>
              </div>

              {/* Chat Thread */}
              <div className="space-y-3.5 text-xs py-2">
                {/* Customer Msg 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex gap-2.5 items-start"
                >
                  <div className="w-7 h-7 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl rounded-tl-none max-w-[85%] border border-white/15 text-white/95 leading-relaxed shadow-xs">
                    "I need a demo for your service."
                  </div>
                </motion.div>

                {/* AI Msg 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex gap-2.5 items-start justify-end"
                >
                  <div className="bg-gradient-to-r from-[#2cd1a1] to-teal-400 text-slate-950 p-3.5 rounded-2xl rounded-tr-none max-w-[85%] font-semibold shadow-md leading-relaxed">
                    "Certainly. May I know which solution you are interested in?"
                  </div>
                </motion.div>

                {/* Customer Msg 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="flex gap-2.5 items-start"
                >
                  <div className="w-7 h-7 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl rounded-tl-none max-w-[85%] border border-white/15 text-white/95 leading-relaxed shadow-xs">
                    "Digital Marketing and AI Chatbot."
                  </div>
                </motion.div>

                {/* AI Msg 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="flex gap-2.5 items-start justify-end"
                >
                  <div className="bg-gradient-to-r from-[#2cd1a1] to-teal-400 text-slate-950 p-3.5 rounded-2xl rounded-tr-none max-w-[85%] font-semibold shadow-md leading-relaxed">
                    "Great. I can help you schedule a consultation. What is the best time to contact you?"
                  </div>
                </motion.div>
              </div>

              {/* Input Simulation Footer */}
              <div className="pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-white/70 font-medium">
                <span className="flex items-center gap-1.5 text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2cd1a1]" />
                  Auto-qualifies leads 24/7
                </span>
                <span className="text-[#2cd1a1] font-bold font-mono text-[11px] flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#2cd1a1] animate-ping" />
                  Live Bot
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AIChatbotFeatureSection;

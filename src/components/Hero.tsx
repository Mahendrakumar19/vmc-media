'use client'

import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, MessageSquare, Mic, Zap, TrendingUp, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem, ParallaxWrapper } from "@/components/animations";
import Link from 'next/link';

const GetStartedModal = dynamic(() => import("@/components/GetStartedModal"), {
  ssr: false,
  loading: () => null
});

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Background Glow Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-[#2cd1a1]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-[#073D7B]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <StaggerContainer className="space-y-6 lg:space-y-7">
            <StaggerItem>
              {/* Small Heading */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2cd1a1]/10 border border-[#2cd1a1]/30 text-[#2cd1a1] text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#2cd1a1]" />
                <span>DIGITAL MARKETING • AI AUTOMATION • BUSINESS GROWTH</span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight">
                Digital Growth.{" "}
                <span className="bg-gradient-to-r from-[#2cd1a1] via-teal-400 to-[#073D7B] bg-clip-text text-transparent block">
                  Powered by AI.
                </span>
              </h1>
            </StaggerItem>

            {/* Paragraph */}
            <StaggerItem>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                At <strong className="text-foreground">VMC Media</strong>, we help businesses attract more customers, generate qualified leads and automate customer engagement through performance-driven digital marketing and AI-powered solutions.
              </p>
            </StaggerItem>

            {/* Action Buttons */}
            <StaggerItem>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#2cd1a1] hover:bg-[#27b98f] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 h-13 px-8 text-base font-bold rounded-xl"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <Link
                  href="/ai-solutions"
                  className="inline-flex items-center justify-center gap-2 bg-card hover:bg-muted border-2 border-[#073D7B]/30 text-foreground shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 h-13 px-8 text-base font-bold rounded-xl"
                >
                  <span>Explore AI Solutions</span>
                </Link>
              </div>
            </StaggerItem>

            {/* Supporting line below buttons */}
            <StaggerItem>
              <div className="pt-3 border-t border-border/60">
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground tracking-wide flex flex-wrap items-center gap-2">
                  <span className="text-[#2cd1a1]">Digital Marketing</span>
                  <span>|</span>
                  <span className="text-foreground">AI Chatbots</span>
                  <span>|</span>
                  <span className="text-[#2cd1a1]">AI Voicebots</span>
                  <span>|</span>
                  <span className="text-foreground">Technology Solutions</span>
                </p>
              </div>
            </StaggerItem>

          </StaggerContainer>

          {/* Right Visual: Technology/Business Flow Illustration (Digital Ads -> Leads -> AI Chatbot/Voicebot -> CRM -> Sales) */}
          <ParallaxWrapper offset={15} className="relative lg:pl-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2cd1a1]/20 to-[#073D7B]/20 rounded-3xl blur-2xl opacity-70" />
              
              <div className="relative bg-card/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border shadow-2xl space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#2cd1a1] animate-ping" />
                    <span className="font-bold text-sm text-foreground uppercase tracking-wider">VMC Autonomous Growth Flow</span>
                  </div>
                  <span className="text-xs text-[#2cd1a1] font-semibold bg-[#2cd1a1]/10 px-2.5 py-1 rounded-full border border-[#2cd1a1]/20">
                    Live System
                  </span>
                </div>

                {/* Flow Step 1: Digital Ads */}
                <div className="bg-muted/60 rounded-xl p-3.5 flex items-center justify-between border border-border/80">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-foreground">1. Digital Ads &amp; Traffic</div>
                      <div className="text-[11px] text-muted-foreground">Google Ads, Meta &amp; SEO Search</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded">Attract</span>
                </div>

                {/* Flow Step 2: Qualified Leads */}
                <div className="bg-muted/60 rounded-xl p-3.5 flex items-center justify-between border border-border/80 ml-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#2cd1a1]/10 text-[#2cd1a1] flex items-center justify-center font-bold">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-foreground">2. Instant Lead Capture</div>
                      <div className="text-[11px] text-muted-foreground">Sub-10s Webhook &amp; Form Ingestion</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#2cd1a1] bg-[#2cd1a1]/10 px-2 py-0.5 rounded">Engage</span>
                </div>

                {/* Flow Step 3: AI Chatbot / Voicebot */}
                <div className="bg-gradient-to-r from-[#073D7B] to-[#012766] text-white rounded-xl p-4 shadow-lg ml-6 space-y-2 border border-white/10">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-[#2cd1a1]" />
                      <Mic className="w-4 h-4 text-[#2cd1a1]" />
                      <span className="font-bold">3. AI Chatbot &amp; Voicebot Active</span>
                    </div>
                    <span className="text-[10px] bg-[#2cd1a1] text-black px-2 py-0.5 rounded-full font-extrabold">24/7 Qualify</span>
                  </div>
                  <p className="text-xs text-white/90 italic">"Hi! I've verified your budget requirement. Meeting booked for Tomorrow at 11 AM."</p>
                </div>

                {/* Flow Step 4: CRM & Sales Closed */}
                <div className="bg-muted/60 rounded-xl p-3.5 flex items-center justify-between border border-border/80 ml-9">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-foreground">4. CRM Sync &amp; Sales Won</div>
                      <div className="text-[11px] text-muted-foreground">Automated Calendar &amp; Team Handover</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">Convert</span>
                </div>

              </div>
            </motion.div>
          </ParallaxWrapper>

        </div>
      </div>

      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
    </>
  );
};

export default Hero;
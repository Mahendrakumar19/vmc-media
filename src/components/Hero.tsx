'use client'

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem, ParallaxWrapper } from "@/components/animations";

// Lazy load modal since it's not immediately needed
const GetStartedModal = dynamic(() => import("@/components/GetStartedModal"), {
  ssr: false,
  loading: () => null
});

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
    <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Simplified Background Elements - Static for better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Content */}
          <StaggerContainer className="space-y-6 lg:space-y-7">
            <StaggerItem>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2cd1a1]/10 border border-[#2cd1a1]/20 text-[#2cd1a1] text-xs font-semibold uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-[#2cd1a1] animate-pulse" />
                <span>Next-Gen SaaS &amp; Growth AI Ecosystem</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                AI WhatsApp CRM &amp;{" "}
                <span className="bg-gradient-to-r from-[#2cd1a1] via-teal-400 to-primary bg-clip-text text-transparent block">
                  Autonomous Growth OS.
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                We combine our flagship <strong className="text-foreground">AIWA WhatsApp CRM</strong>, autonomous voice agents, and precision performance marketing to capture, qualify, and convert customers 24/7.
              </p>
            </StaggerItem>

            {/* Social Proof and CTA Button */}
            <StaggerItem>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                {/* Social Proof on Left */}
                <div className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-premium hover:scale-[1.02] transition-transform">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2cd1a1]/20 to-primary/20 border-2 border-card flex items-center justify-center text-xs font-bold text-[#2cd1a1]"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-foreground">Top Rated SaaS</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">100k+ Automated</span> Conversations
                    </p>
                  </div>
                </div>

                {/* Subdomain & Demo Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://aiwa.vmcmedia.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#2cd1a1] hover:bg-[#27b98f] text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 h-12 px-6 text-sm font-semibold rounded-xl"
                  >
                    <span>Launch AIWA SaaS</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <Button 
                    size="lg" 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 h-12 px-6 text-sm font-semibold rounded-xl"
                  >
                    Book AI Demo
                  </Button>
                </div>
              </div>
            </StaggerItem>

            {/* Stats */}
            <StaggerItem>
              <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:items-center sm:gap-6 lg:gap-8 pt-2">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-foreground">Sub-100ms</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Webhook Latency</div>
                </div>
                <div className="hidden sm:block h-12 w-px bg-border" />
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-foreground">Meta Cloud</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Official Cloud API</div>
                </div>
                <div className="hidden sm:block h-12 w-px bg-border" />
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-foreground">Multi-LLM</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">BYOK Architecture</div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Right Visual */}
          <ParallaxWrapper offset={20} className="relative lg:pl-6 mt-12 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60" />
              
              <div className="relative bg-card rounded-3xl p-4 sm:p-6 lg:p-8 border border-border/50 shadow-premium-lg flex flex-col gap-4">
                {/* Simulated AI Funnel Visual */}
                <div className="bg-muted rounded-xl p-4 flex items-center justify-between border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">Google Ads Traffic</div>
                      <div className="text-xs text-muted-foreground">+450 clicks today</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90 sm:rotate-0" />
                </div>
                
                <div className="bg-primary text-white rounded-xl p-4 border border-primary-foreground/20 shadow-lg ml-0 sm:ml-6 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-semibold">AI Bot Active</span>
                  </div>
                  <div className="text-sm">"Hi! Are you looking for a 3BHK in Noida?"</div>
                  <div className="text-xs text-primary-foreground/70 mt-2 text-right">Instant Qualification</div>
                </div>

                <div className="bg-card rounded-xl p-4 flex items-center justify-between border border-border ml-0 sm:ml-12 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Star className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">CRM Updated</div>
                      <div className="text-xs text-muted-foreground">Meeting booked for Tomorrow, 10 AM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 1 - Positioned safely without clipping */}
              <div className="hidden md:flex absolute -top-5 -left-5 bg-card/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-premium-lg border border-border/60 hover:scale-105 transition-all z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2cd1a1]/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#2cd1a1]" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground">&lt;5s</div>
                    <div className="text-[11px] text-muted-foreground">Speed to Lead</div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 2 - Positioned safely without clipping */}
              <div className="hidden md:block absolute -bottom-5 -right-5 bg-card/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-premium-lg border border-border/60 w-52 sm:w-60 hover:scale-105 transition-all z-20">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-foreground">Qualified Leads</span>
                  <span className="text-[10px] text-muted-foreground">This Week</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-foreground">342</span>
                  <span className="text-xs font-semibold text-[#2cd1a1] flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 rotate-[-45deg]" />
                    +125%
                  </span>
                </div>
              </div>
            </motion.div>
          </ParallaxWrapper>

          {/* Background Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl -z-10" />
        </div>
      </div>

      {/* Get Started Modal */}
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
    </>
  );
};

export default Hero;
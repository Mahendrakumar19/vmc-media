'use client'

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState, useEffect, useCallback } from "react";
import Link from 'next/link';
import { 
  Megaphone, 
  Bot, 
  Activity, 
  TrendingUp 
} from "lucide-react";

const GetStartedModal = dynamic(() => import("@/components/GetStartedModal"), {
  ssr: false,
  loading: () => null
});

interface SlideData {
  badge: string;
  headlineLine1: string;
  headlineLine2: string;
  description: string;
  primaryButtonText: string;
  primaryButtonAction?: "modal" | "link";
  primaryButtonHref?: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
  mockupImage: string;
  alt: string;
}

const slides: SlideData[] = [
  // Slide 1 (Image 2 from user upload)
  {
    badge: "DIGITAL MARKETING • DATA-DRIVEN GROWTH",
    headlineLine1: "Digital Growth.",
    headlineLine2: "Powered by AI.",
    description: "At VMC Media, we help businesses attract more customers, generate qualified leads, and automate customer engagement through performance-driven marketing and proprietary AI solutions.",
    primaryButtonText: "Get Growth Assessment",
    primaryButtonAction: "modal",
    secondaryButtonText: "Explore AI Solutions",
    secondaryButtonHref: "/ai-solutions",
    mockupImage: "/hero-slide-1-mockup.png",
    alt: "VMC Media Digital Growth Powered by AI marketing dashboard mockup"
  },
  // Slide 2 (Image 1 from user upload)
  {
    badge: "AI-powered customer engagement",
    headlineLine1: "Customer Engagement.",
    headlineLine2: "On Autopilot.",
    description: "Empower your business with intelligent AI chatbots, human-like voicebots and automated conversations that qualify leads, engage customers and drive growth around the clock.",
    primaryButtonText: "Get Growth Assessment",
    primaryButtonAction: "modal",
    secondaryButtonText: "Explore AI Solutions",
    secondaryButtonHref: "/ai-solutions",
    mockupImage: "/hero-slide-2-mockup.png",
    alt: "VMC Media Customer Engagement on Autopilot AI smartphone mockup"
  },
  // Slide 3 (Image 3 from user upload)
  {
    badge: "Full-Funnel Lead Engines • ROI-Focused PPC",
    headlineLine1: "Predictable Leads.",
    headlineLine2: "Engineered to Scale.",
    description: "From laser-targeted Google Ads to organic multi-channel ranking, we build high-converting acquisition funnels backed by real-time analytics and transparent ROI attribution.",
    primaryButtonText: "Get Growth Assessment",
    primaryButtonAction: "modal",
    secondaryButtonText: "Explore AI Solutions",
    secondaryButtonHref: "/ai-solutions",
    mockupImage: "/hero-slide-3-mockup.png",
    alt: "VMC Media Predictable Leads Engineered to Scale performance analytics mockup"
  }
];

const featurePills = [
  {
    title: "Digital Marketing",
    icon: Megaphone,
    href: "/digital-marketing"
  },
  {
    title: "AI Chatbots",
    icon: Bot,
    href: "/ai-solutions/ai-chatbot"
  },
  {
    title: "AI Voicebots",
    icon: Activity,
    href: "/ai-solutions/ai-voicebot"
  },
  {
    title: "Revenue Automation",
    icon: TrendingUp,
    href: "/products/aiwa"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // 7-second slide autoplay
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const slide = slides[currentSlide];

  return (
    <>
      <section 
        className="relative w-full bg-white dark:bg-slate-950 overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-16 border-b border-slate-100 dark:border-slate-800/60"
        id="hero"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Subtle background ambient glow matching the modern design */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-emerald-100/50 via-teal-50/25 to-transparent dark:from-emerald-950/20 dark:via-transparent rounded-full blur-3xl pointer-events-none -z-0" />

        {/* Main Hero Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
            
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left pt-2 sm:pt-4">
              
              {/* Badge Pill */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#e8f7f2] dark:bg-emerald-950/60 border border-[#bfe9db] dark:border-emerald-800/60 text-[#149a75] dark:text-[#2cd1a1] text-[11px] sm:text-xs font-semibold tracking-wide uppercase mb-6 sm:mb-7 transition-all duration-500">
                {slide.badge}
              </div>

              {/* Bold Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[58px] font-extrabold text-[#111827] dark:text-white tracking-tight leading-[1.12] mb-5 sm:mb-6 transition-all duration-500 max-w-2xl">
                <span className="block whitespace-nowrap">{slide.headlineLine1}</span>
                <span className="block whitespace-nowrap">{slide.headlineLine2}</span>
              </h1>

              {/* Paragraph Description */}
              <p className="text-[15px] sm:text-base md:text-[17px] text-[#4b5563] dark:text-slate-300 leading-relaxed max-w-[560px] lg:max-w-[580px] mb-8 sm:mb-9 transition-all duration-500">
                {slide.description}
              </p>

              {/* CTAs matching exact UI buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 rounded-xl bg-[#00a67e] hover:bg-[#008f6c] text-white font-semibold text-sm shadow-sm transition-all duration-200 cursor-pointer hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  {slide.primaryButtonText}
                </button>

                <Link
                  href={slide.secondaryButtonHref}
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-[#d1d5db] dark:border-slate-700 hover:border-[#9ca3af] dark:hover:border-slate-500 text-[#374151] dark:text-slate-200 font-semibold text-sm shadow-xs hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all duration-200 text-center hover:scale-[1.02] active:scale-[0.98]"
                >
                  {slide.secondaryButtonText}
                </Link>
              </div>

              {/* Slide Dots Indicator */}
              <div className="flex items-center gap-2 mt-7 sm:mt-7">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentSlide 
                        ? "w-7 bg-[#00a67e]" 
                        : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

            </div>

            {/* Right Column: High Quality 3D Visual Mockup */}
            <div className="lg:col-span-5 xl:col-span-5 relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] lg:max-w-[540px] xl:max-w-[580px] aspect-[1024/764]">
                {slides.map((s, idx) => (
                  <div
                    key={s.mockupImage}
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${
                      idx === currentSlide 
                        ? "opacity-100 scale-100 translate-y-0 z-10" 
                        : "opacity-0 scale-95 translate-y-2 -z-10 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={s.mockupImage}
                      alt={s.alt}
                      width={1200}
                      height={896}
                      priority={idx === 0}
                      className="w-full h-auto object-contain drop-shadow-sm select-none"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom 4 Feature Pills Strip */}
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100 dark:border-slate-800/60">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-0 items-center">
              {featurePills.map((pill, idx) => {
                const IconComponent = pill.icon;
                return (
                  <div 
                    key={pill.title} 
                    className={`flex items-center justify-start lg:justify-center gap-3 px-2 sm:px-4 ${
                      idx !== featurePills.length - 1 
                        ? "lg:border-r lg:border-teal-400/50 dark:lg:border-teal-500/30" 
                        : ""
                    }`}
                  >
                    <Link
                      href={pill.href}
                      className="group flex items-center gap-3 transition-colors"
                    >
                      {/* Outline Icon Box */}
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg border border-[#2cd1a1] dark:border-[#2cd1a1]/80 flex items-center justify-center text-[#00a67e] dark:text-[#2cd1a1] group-hover:bg-[#e8f7f2] dark:group-hover:bg-[#2cd1a1]/10 transition-colors shrink-0">
                        <IconComponent className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      
                      {/* Label */}
                      <span className="text-xs sm:text-sm font-semibold text-[#111827] dark:text-slate-100 group-hover:text-[#00a67e] dark:group-hover:text-[#2cd1a1] transition-colors">
                        {pill.title}
                      </span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Hero;

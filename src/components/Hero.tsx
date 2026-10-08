'use client'

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import Link from 'next/link';

const GetStartedModal = dynamic(() => import("@/components/GetStartedModal"), {
  ssr: false,
  loading: () => null
});

interface SlideData {
  badge: string;
  headlineMain: string;
  headlineHighlight: string;
  description: string;
  image: string;
  alt: string;
}

const slides: SlideData[] = [
  {
    badge: "Digital Marketing • AI Automation • Business Growth",
    headlineMain: "Digital Growth.",
    headlineHighlight: "Powered by AI.",
    description: "At VMC Media, we help businesses attract more customers, generate qualified leads, and automate customer engagement through performance-driven marketing and proprietary AI solutions.",
    image: "/hero-slide-1.jpg",
    alt: "VMC Media Enterprise AI and Digital Strategy"
  },
  {
    badge: "Full-Funnel Lead Engines • ROI-Focused PPC",
    headlineMain: "Predictable Leads.",
    headlineHighlight: "Engineered to Scale.",
    description: "From laser-targeted Google Ads to organic multi-channel ranking, we build high-converting acquisition funnels backed by real-time analytics and transparent ROI attribution.",
    image: "/hero-slide-2.jpg",
    alt: "Performance Marketing and Real-Time Growth Analytics"
  },
  {
    badge: "24/7 AI Chatbots & Voicebots • Automated CRM Handover",
    headlineMain: "Customer Engagement.",
    headlineHighlight: "On Autopilot.",
    description: "Empower your business with sub-10-second lead qualification, intelligent conversational chatbots, and human-like AI voicebots that convert prospects while you sleep.",
    image: "/hero-slide-3.jpg",
    alt: "Human-AI Collaboration and Conversational Automation"
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

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <>
      <section 
        className="relative w-full min-h-[640px] lg:min-h-[760px] flex items-center justify-center overflow-hidden pt-20 pb-16"
        id="hero"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Image Carousel */}
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-0 pointer-events-auto" : "opacity-0 -z-10 pointer-events-none"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover object-center transition-transform duration-[7000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />
              {/* Multi-layered cinematic gradient overlays for pristine readability */}
              <div className="absolute inset-0 bg-black/60 dark:bg-black/75" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/80" />
            </div>
          );
        })}

        {/* Centered Content Container */}
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative z-10 text-center flex flex-col items-center">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 text-[#2cd1a1] text-xs sm:text-xs font-bold uppercase tracking-wider mb-4 shadow-lg animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-[#2cd1a1]" />
            <span>{slides[currentSlide].badge}</span>
          </div>

          {/* Centered Hero Headline - Compact & Balanced */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white leading-tight tracking-tight max-w-3xl mb-4 drop-shadow-md">
            <span>{slides[currentSlide].headlineMain} </span>
            <span className="bg-gradient-to-r from-[#2cd1a1] via-teal-300 to-cyan-400 bg-clip-text text-transparent block sm:inline">
              {slides[currentSlide].headlineHighlight}
            </span>
          </h1>

          {/* Centered Subtext - Reduced Gap & Tightened Leading */}
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl leading-relaxed mb-6 drop-shadow-sm font-normal">
            {slides[currentSlide].description}
          </p>

          {/* Centered Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="bg-[#2cd1a1] hover:bg-[#27b98f] text-black hover:text-black font-extrabold shadow-xl hover:shadow-[#2cd1a1]/40 hover:scale-105 active:scale-95 transition-all duration-300 h-11 px-7 text-sm rounded-xl w-full sm:w-auto cursor-pointer"
            >
              Get Free Growth Assessment
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>

            <Link
              href="/ai-solutions"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 h-11 px-7 text-sm font-bold rounded-xl w-full sm:w-auto"
            >
              Explore AI Solutions
            </Link>
          </div>

          {/* Feature Highlights Pills under buttons */}
          <div className="pt-5 mt-5 border-t border-white/15 flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs font-semibold text-white/80">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#2cd1a1]" /> Digital Marketing
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" /> AI Chatbots
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#2cd1a1]" /> AI Voicebots
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> Revenue Automation
            </span>
          </div>

        </div>

        {/* Previous Slide Navigation Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white flex items-center justify-center backdrop-blur-md hover:scale-110 active:scale-95 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Slide Navigation Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white flex items-center justify-center backdrop-blur-md hover:scale-110 active:scale-95 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slider Dot Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 bg-black/40 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/15">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? "w-8 bg-[#2cd1a1]" : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

      </section>

      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Hero;
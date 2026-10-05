'use client';

import { ArrowRight, PhoneCall } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Link from "next/link";
import Image from "next/image";

const CTA = () => {
  const { openModal } = useModal();

  return (
    <section className="py-24 bg-[#011a47] text-white relative overflow-hidden">
      {/* Subtle Growth Overlay Background */}
      <div className="absolute inset-0 opacity-15 mix-blend-screen pointer-events-none">
        <Image
          src="/hero-growth.jpg"
          alt="Business Growth Analytics Visual"
          fill
          className="object-cover"
        />
      </div>

      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(44,209,161,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#011a47]/90 via-transparent to-[#011a47]/90 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 max-w-5xl text-center relative z-10">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
          Ready to Turn Digital Reach Into Real Business?
        </h2>

        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
          Let's discuss your business objectives and identify where digital marketing and AI automation can create measurable opportunities for growth.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            onClick={openModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2cd1a1] hover:bg-[#27b98f] text-slate-950 font-black px-8 py-4 rounded-2xl text-base shadow-xl shadow-[#2cd1a1]/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>Get Free Growth Assessment</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl text-base backdrop-blur-md transition-all hover:border-white/40"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Talk to an Expert</span>
          </Link>
        </div>

        {/* Small text underneath */}
        <p className="text-xs text-white/60 font-medium tracking-wide">
          No obligation. Let's start with a conversation.
        </p>

      </div>
    </section>
  );
};

export default CTA;
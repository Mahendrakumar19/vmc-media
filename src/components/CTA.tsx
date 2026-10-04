'use client';

import { ArrowRight, PhoneCall } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Link from "next/link";

const CTA = () => {
  const { openModal } = useModal();

  return (
    <section className="py-24 bg-gradient-to-r from-[#012766] via-[#073D7B] to-[#012766] text-white relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(44,209,161,0.15),transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 max-w-5xl text-center relative z-10">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
          Ready to Turn Digital Reach Into Real Business?
        </h2>

        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
          Let's discuss your business objectives and identify where digital marketing and AI automation can create measurable opportunities for growth.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            onClick={openModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2cd1a1] hover:bg-[#27b98f] text-white font-bold px-8 py-4 rounded-xl text-base shadow-xl hover:scale-105 transition-all"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-xl text-base transition-all"
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
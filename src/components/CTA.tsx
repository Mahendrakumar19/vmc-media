'use client'

import { ArrowRight, Sparkles } from "lucide-react";
import { useModal } from "@/context/ModalContext";

// Mock Button component for demonstration
const Button = ({ children, size, variant, className, ...props }: any) => (
  <button className={className} {...props}>
    {children}
  </button>
);

const CTA = () => {
  const { openModal } = useModal();

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">Free Pipeline Audit + AI Demo</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Experience Your Custom AI Growth Engine.
          </h2>
          
          <p className="text-base md:text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Get a free audit of your current digital marketing funnel + a working preview of an AI Chatbot customized for your business. Stop losing leads to slow response times.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openModal} className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3 rounded-xl font-bold shadow-xl transition-all group">
              Preview AI Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={openModal} className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-3 rounded-xl font-bold transition-all group">
              Get Free Growth Audit
            </button>
          </div>

          <p className="text-white/70 text-sm mt-6">
            No commitment required • Free website audit • Direct CRM Integration 
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
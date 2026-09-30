'use client';

import { Mic, PhoneCall, ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const AIVoicebotSection = () => {
  const { openModal } = useModal();

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Mic className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-semibold tracking-wider">AI VOICEBOT</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              AI Voice Agents for Inbound & Outbound Calls.
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Engage leads within 60 seconds of form submission. Handle hundreds of simultaneous inbound and outbound calls with natural conversational tone, sub-second latency, and zero agent fatigue.
            </p>

            <div className="space-y-3 pt-4">
              {[
                "Speed-to-lead outbound follow-ups",
                "Inbound front-desk enquiry handling",
                "Conversational lead qualification",
                "Automated appointment booking & reminders",
                "Post-service customer feedback",
                "Graceful human transfer for complex queries"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button onClick={openModal} className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md font-semibold transition-colors group">
                Request Voicebot Sample
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent blur-2xl rounded-3xl -z-10" />
            <div className="bg-card border border-border shadow-premium-lg rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Inbound Lead Qualification</h3>
                    <p className="text-sm text-muted-foreground">0:45 • Real Estate Site Visit</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 mb-8">
                {/* Audio visualizer mock */}
                <div className="flex items-center justify-center gap-1 h-16">
                  {[...Array(30)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1.5 bg-primary/40 rounded-full" 
                      style={{ height: `${Math.random() * 100}%` }}
                    />
                  ))}
                </div>
              </div>

              <button disabled className="w-full bg-primary/50 text-white/50 cursor-not-allowed rounded-lg py-4 flex items-center justify-center gap-3 font-semibold transition-colors">
                <Play className="w-5 h-5" />
                Audio Demo Coming Soon
              </button>

              <div className="mt-6 text-center">
                <p className="text-xs text-muted-foreground">
                  *Integrate a real Voice AI audio sample here (e.g., Bland AI, Vapi, Retell).
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIVoicebotSection;

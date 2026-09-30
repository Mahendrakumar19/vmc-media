'use client';

import { CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const AIChatbotSection = () => {
  const { openModal } = useModal();

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-transparent blur-2xl rounded-3xl -z-10" />
            <div className="bg-card border border-border shadow-premium-lg rounded-2xl overflow-hidden flex flex-col h-[500px] relative">
              <div className="absolute top-2 right-2 bg-black/50 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm z-10 font-medium">
                UI Mockup
              </div>
              <div className="bg-muted px-4 py-3 border-b border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">V</div>
                <div>
                  <div className="font-semibold text-sm">VMC Growth Agent</div>
                  <div className="text-xs text-accent">Online</div>
                </div>
              </div>
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent flex-shrink-0" />
                  <div className="bg-muted rounded-2xl rounded-tl-none px-4 py-2 text-sm max-w-[80%]">
                    Hi! Looking to scale marketing, deploy an AI agent, or both?
                  </div>
                </div>
                <div className="flex gap-3 flex-row-reverse">
                  <div className="bg-primary text-white rounded-2xl rounded-tr-none px-4 py-2 text-sm max-w-[80%]">
                    We need help capturing leads after hours.
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent flex-shrink-0" />
                  <div className="bg-muted rounded-2xl rounded-tl-none px-4 py-2 text-sm max-w-[80%]">
                    Our AI Chatbots capture and qualify leads 24/7. What industry are you in?
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-border bg-muted/30">
                <div className="bg-background border border-border rounded-full px-4 py-2 text-sm text-muted-foreground flex justify-between items-center">
                  <span>Type a message...</span>
                  <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
              <MessageSquare className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-semibold tracking-wider">AI CHATBOT</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Turn Website & WhatsApp Enquiries Into Qualified Leads.
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Deploy custom-trained conversational AI that understands customer intent, answers complex pricing questions, qualifies budgets, and books appointments straight into your CRM.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                "Capture enquiries 24/7",
                "Qualify lead intent & budget",
                "Connect with your CRM",
                "Book appointments instantly",
                "Answer complex FAQs",
                "Seamless human escalation"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button onClick={openModal} className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-semibold transition-colors group">
                Preview AI Chatbot
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-muted-foreground mt-3">*Requires integration with your live AI chatbot provider (e.g., Dialogflow, Botpress, Custom LLM).</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIChatbotSection;

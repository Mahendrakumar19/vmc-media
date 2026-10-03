'use client';

import { ArrowRight, Workflow, Database, CalendarCheck, CheckCircle2 } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const SalesAutomationSection = () => {
  const { openModal } = useModal();

  return (
    <section className="py-20 bg-background relative overflow-hidden border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
            <Workflow className="w-4 h-4 text-secondary" />
            <span className="text-secondary text-sm font-semibold tracking-wider">SALES AUTOMATION</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            From Lead Generation to Lead Conversion.
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't stop at generating leads. Our AI systems instantly engage, qualify, and route prospects so your sales team only talks to high-intent buyers ready to close.
          </p>
        </div>

        {/* Funnel Visualizer */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Funnel (lg screens and up) */}
          <div className="hidden lg:flex justify-between items-center relative px-4">
            <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-primary via-[#2cd1a1] to-secondary -translate-y-1/2 -z-10" />
            
            {[
              { title: "Traffic", subtitle: "SEO & Ads", icon: ArrowRight },
              { title: "Lead", subtitle: "Form / Chat", icon: ArrowRight },
              { title: "AI Response", subtitle: "< 10 Seconds", icon: ArrowRight },
              { title: "Qualification", subtitle: "Budget / Intent", icon: ArrowRight },
              { title: "Appointment", subtitle: "Calendar Sync", icon: CalendarCheck },
              { title: "CRM", subtitle: "Data Logged", icon: Database },
              { title: "Sales", subtitle: "Closed Won", icon: CheckCircle2 }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center group px-1">
                <div className="w-12 h-12 rounded-full bg-card border-2 border-primary text-primary flex items-center justify-center mb-2 shadow-md group-hover:scale-110 transition-transform">
                  <step.icon className="w-5 h-5" />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-xs sm:text-sm text-foreground whitespace-nowrap">{step.title}</h4>
                  <p className="text-[11px] text-muted-foreground whitespace-nowrap">{step.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile & Tablet Funnel (< lg screens) */}
          <div className="lg:hidden space-y-4 sm:space-y-6">
            {[
              { title: "Traffic", subtitle: "Targeted SEO & Ads" },
              { title: "Lead", subtitle: "Captured via Form or Chat" },
              { title: "Instant AI Response", subtitle: "Engaged in under 10 Seconds" },
              { title: "Qualification", subtitle: "Budget & Intent Verified" },
              { title: "Appointment", subtitle: "Direct Calendar Sync" },
              { title: "CRM Sync", subtitle: "HubSpot / Zoho Logged" },
              { title: "Sales", subtitle: "Team Closes the Deal" }
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-4 bg-card border border-border p-4 rounded-xl shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button onClick={openModal} className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-semibold transition-colors group">
            Automate Your Pipeline
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default SalesAutomationSection;


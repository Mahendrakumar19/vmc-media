'use client';

import { Building2, Stethoscope, GraduationCap, ShoppingBag, Briefcase, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useModal } from "@/context/ModalContext";

const industries = [
  {
    id: "real-estate",
    icon: Building2,
    title: "Real Estate",
    problem: "Thousands of ad clicks generate unverified leads; sales reps waste 70% of time calling unqualified inquiries.",
    solution: "Hyper-targeted Meta & Google Ads + Instant WhatsApp AI Bot.",
    aiUseCase: "Filters budget criteria (>₹1.5Cr) and schedules site visits.",
    workflow: "Google Ad → AI WhatsApp Chat → Budget Qual → Site Visit Booking → CRM"
  },
  {
    id: "healthcare",
    icon: Stethoscope,
    title: "Healthcare",
    problem: "High front-desk call drop rates during peak hours; patient no-shows reach 30–40%.",
    solution: "Local SEO Map Pack dominance + Inbound AI Voicebot acting as a 24/7 receptionist.",
    aiUseCase: "OPD booking and automated WhatsApp appointment reminders.",
    workflow: "Map Pack Search → AI Voicebot Call → Doctor Availability → Booking → Reminder SMS"
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education",
    problem: "Massive influx of student inquiries during admission cycles overwhelms counseling teams.",
    solution: "Multi-channel Google/Social student acquisition + Speed-to-Lead Outbound Voicebot.",
    aiUseCase: "Calls students within 2 minutes of inquiry to confirm course eligibility.",
    workflow: "Lead Form → Outbound AI Call (2 mins) → Eligibility Check → Counselor Handoff"
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    title: "E-commerce",
    problem: "Rising CAC on Meta Ads; 70%+ abandoned carts with high customer churn.",
    solution: "Performance ad creative testing + Conversational WhatsApp sequences.",
    aiUseCase: "Abandoned cart recovery & automated customer support/order tracking.",
    workflow: "Cart Abandoned → WhatsApp AI Recovery Msg → Discount Offer → Checkout"
  },
  {
    id: "b2b",
    icon: Briefcase,
    title: "B2B / Professional",
    problem: "Long sales cycles, low form conversion rates, and manual follow-up delays.",
    solution: "High-authority LinkedIn/Search strategy + AI conversational qualification agent.",
    aiUseCase: "Books qualified discovery calls directly into Google Calendar.",
    workflow: "LinkedIn Ad → Web AI Chatbot → Company Size Qual → Calendar Booking → CRM"
  }
];

const IndustriesSection = () => {
  const [activeTab, setActiveTab] = useState(industries[0].id);
  const { openModal } = useModal();
  
  const activeIndustry = industries.find(i => i.id === activeTab) || industries[0];

  return (
    <section className="py-20 bg-muted/30 relative border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Industry-Specific AI Growth Blueprints
          </h2>
          <p className="text-muted-foreground">
            We don't use generic templates. Every industry has unique conversion bottlenecks, and we build the exact digital and AI workflows required to fix them.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`flex items-center gap-4 px-6 py-4 rounded-xl text-left transition-all ${
                  activeTab === ind.id 
                    ? "bg-primary text-white shadow-lg scale-[1.02]" 
                    : "bg-card hover:bg-muted text-foreground border border-border"
                }`}
              >
                <ind.icon className={`w-6 h-6 ${activeTab === ind.id ? "text-white" : "text-primary"}`} />
                <span className="font-semibold">{ind.title}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-premium h-full animate-fade-in" key={activeTab}>
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <activeIndustry.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{activeIndustry.title} Automation</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Customer Problem</h4>
                  <p className="text-foreground">{activeIndustry.problem}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">VMC 2.0 Solution</h4>
                  <p className="text-foreground">{activeIndustry.solution}</p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">AI Use Case</h4>
                  <p className="text-foreground">{activeIndustry.aiUseCase}</p>
                </div>

                <div className="bg-muted p-4 rounded-xl border border-border">
                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Expected Business Workflow</h4>
                  <div className="flex items-center flex-wrap gap-2 text-sm font-semibold text-foreground">
                    {activeIndustry.workflow.split(' → ').map((step, i, arr) => (
                      <div key={i} className="flex items-center gap-2">
                        <span>{step}</span>
                        {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-primary" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <button onClick={openModal} className="text-primary font-semibold hover:text-primary/80 inline-flex items-center gap-2 transition-colors">
                  Discuss {activeIndustry.title} Strategy <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

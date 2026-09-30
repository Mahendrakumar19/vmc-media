'use client';

import { Search, Globe, Target, Share2, PenTool, BarChart3, Bot, PhoneCall, Workflow, Database, CalendarCheck } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

const ConnectCreateGrow = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("connect");

  const pillars = {
    connect: {
      title: "CONNECT",
      description: "Demand Generation Engine. We help businesses attract high-intent customers through search, paid media, social and performance marketing.",
      color: "bg-primary",
      textColor: "text-primary",
      services: [
        { icon: Search, name: "SEO & Local SEO", link: "/services/seo" },
        { icon: Target, name: "Google Ads & PPC", link: "/services/google-ads" },
        { icon: Share2, name: "Social Media Marketing", link: "/services/smm" },
        { icon: Globe, name: "E-commerce Marketing", link: "/services/ecommerce" }
      ]
    },
    create: {
      title: "CREATE",
      description: "Digital Experiences & AI Agents. Build high-converting landing pages and deploy intelligent conversational AI to engage visitors instantly.",
      color: "bg-accent",
      textColor: "text-accent",
      services: [
        { icon: Globe, name: "Websites & Landing Pages", link: "/services/web-development" },
        { icon: PenTool, name: "Content Marketing", link: "/services/branding" },
        { icon: Bot, name: "AI Chatbots (Web & WhatsApp)", link: "/ai-solutions/ai-chatbot" },
        { icon: BarChart3, name: "Conversion Rate Optimization", link: "/services/cro" }
      ]
    },
    grow: {
      title: "GROW",
      description: "Automated Conversion & Scale. Convert traffic into pipeline with voicebots, CRM routing, and automated appointment scheduling.",
      color: "bg-secondary",
      textColor: "text-secondary",
      services: [
        { icon: PhoneCall, name: "AI Voicebots (Inbound/Outbound)", link: "/ai-solutions/ai-voicebot" },
        { icon: Workflow, name: "Lead Qualification Workflows", link: "/ai-solutions/sales-automation" },
        { icon: Database, name: "CRM Integration (HubSpot/Zoho)", link: "/ai-solutions/sales-automation" },
        { icon: CalendarCheck, name: "Appointment Booking", link: "/ai-solutions/sales-automation" }
      ]
    }
  };

  const activePillar = pillars[activeTab as keyof typeof pillars];

  return (
    <section className="py-20 bg-background relative" id="services">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The VMC Growth Engine
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't just sell services; we deploy a unified growth architecture. Connect with traffic, create engaging AI experiences, and grow your revenue through automation.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          {Object.entries(pillars).map(([key, pillar]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-8 py-4 rounded-xl font-bold tracking-widest text-sm transition-all duration-300 ${
                activeTab === key 
                  ? `${pillar.color} text-white shadow-xl scale-105` 
                  : "bg-card text-foreground hover:bg-muted border border-border"
              }`}
            >
              {pillar.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-10 shadow-premium-lg animate-fade-in relative overflow-hidden">
          {/* Decorative background blur */}
          <div className={`absolute -top-32 -right-32 w-64 h-64 ${activePillar.color}/10 rounded-full blur-3xl`} />
          
          <div className="grid lg:grid-cols-5 gap-10 items-center relative z-10">
            <div className="lg:col-span-2 space-y-4">
              <h3 className={`text-3xl font-bold ${activePillar.textColor}`}>
                {activePillar.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {activePillar.description}
              </p>
            </div>
            
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
              {activePillar.services.map((service, index) => (
                <div 
                  key={index}
                  onClick={() => router.push(service.link)}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-background hover:border-primary/50 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-lg ${activePillar.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <service.icon className={`w-6 h-6 ${activePillar.textColor}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                      {service.name}
                    </h4>
                  </div>
                  <ArrowRight className={`w-4 h-4 text-muted-foreground group-hover:${activePillar.textColor} group-hover:translate-x-1 transition-all`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectCreateGrow;

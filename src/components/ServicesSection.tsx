'use client';

import { ArrowRight, CheckCircle2, Megaphone, Target, MessageSquare, Mic } from "lucide-react";
import Link from "next/link";

const ServicesSection = () => {
  const cards = [
    {
      title: "DIGITAL MARKETING",
      icon: Megaphone,
      accent: "text-blue-500",
      bgAccent: "bg-blue-500/10",
      desc: "Build your digital presence and reach the right audience with targeted, measurable marketing campaigns.",
      items: [
        "Social Media Marketing",
        "Facebook & Instagram",
        "LinkedIn Marketing",
        "YouTube Marketing",
        "SEO & Local SEO",
        "Google Ads",
        "Performance Marketing",
        "Creative Content"
      ],
      btnText: "Explore Digital Marketing →",
      btnLink: "/services"
    },
    {
      title: "AI CHATBOT",
      icon: MessageSquare,
      accent: "text-[#2cd1a1]",
      bgAccent: "bg-[#2cd1a1]/10",
      desc: "Give your customers instant answers and turn website conversations into qualified opportunities — 24×7.",
      items: [
        "Website Chatbot",
        "WhatsApp Automation",
        "FAQs & Customer Support",
        "Lead Qualification",
        "Product & Service Enquiries",
        "Appointment Booking",
        "Human Handover",
        "CRM Integration"
      ],
      btnText: "Explore AI Chatbot →",
      btnLink: "/ai-solutions/ai-chatbot"
    },
    {
      title: "AI VOICEBOT",
      icon: Mic,
      accent: "text-purple-500",
      bgAccent: "bg-purple-500/10",
      desc: "Automate customer conversations with AI-powered voice interactions for enquiries, qualification, follow-ups and appointments.",
      items: [
        "Inbound Enquiries",
        "Lead Qualification",
        "Outbound Follow-ups",
        "Appointment Booking",
        "Reminder Calls",
        "Customer Surveys",
        "Campaign Calls",
        "CRM Integration"
      ],
      btnText: "Explore AI Voicebot →",
      btnLink: "/ai-solutions/ai-voicebot"
    },
    {
      title: "TECHNOLOGY SOLUTIONS",
      icon: Target,
      accent: "text-amber-500",
      bgAccent: "bg-amber-500/10",
      desc: "Leverage technology to automate processes, improve efficiency, and deliver better customer experiences.",
      items: [
        "Web Application Development",
        "Mobile Application Development",
        "Custom Software Development",
        "Cloud Solutions"
      ],
      btnText: "Explore Technology Solutions →",
      btnLink: "/services/technology-solutions"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="services">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Solutions Built for Business Growth
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            We combine digital marketing, lead generation and AI automation to help businesses build a stronger digital presence and create more meaningful customer interactions.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-[#2cd1a1]/50 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${card.bgAccent} ${card.accent} flex items-center justify-center`}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground bg-muted px-3 py-1 rounded-full border border-border">
                    {card.title}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{card.desc}</p>

                {/* Items List */}
                <div className="grid grid-cols-2 gap-2.5 mb-8">
                  {card.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2cd1a1] flex-shrink-0" />
                      <span className="text-xs font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Button */}
              <div className="pt-4 border-t border-border/60">
                <Link
                  href={card.btnLink}
                  className="inline-flex items-center gap-2 font-bold text-sm text-[#073D7B] dark:text-[#2cd1a1] hover:underline group-hover:translate-x-1 transition-transform"
                >
                  <span>{card.btnText}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;

'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faRobot, faMicrophone, faMicrochip, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ServicesSection = () => {
  const cards = [
    {
      title: "DIGITAL MARKETING",
      icon: faBullhorn,
      accent: "text-blue-500",
      bgAccent: "bg-blue-500/10",
      desc: "Build your digital presence and reach the right audience with targeted, measurable marketing campaigns.",
      items: [
        "Google Ads & PPC Campaigns",
        "Social Media Ads (Meta & LinkedIn)",
        "Search Engine Optimization (SEO)",
        "Conversion Rate Optimization (CRO)"
      ],
      btnText: "Explore Digital Marketing →",
      btnLink: "/services"
    },
    {
      title: "AI CHATBOT",
      icon: faRobot,
      accent: "text-[#2cd1a1]",
      bgAccent: "bg-[#2cd1a1]/10",
      desc: "Give your customers instant answers and turn website conversations into qualified opportunities — 24×7.",
      items: [
        "Official WhatsApp Meta Automation",
        "Sub-10s Intent Lead Qualification",
        "24/7 Intelligent Appointment Booking",
        "Seamless CRM & Human Live Handover"
      ],
      btnText: "Explore AI Chatbot →",
      btnLink: "/ai-solutions/ai-chatbot"
    },
    {
      title: "AI VOICEBOT",
      icon: faMicrophone,
      accent: "text-purple-500",
      bgAccent: "bg-purple-500/10",
      desc: "Automate customer conversations with AI-powered voice interactions for enquiries, qualification, follow-ups and appointments.",
      items: [
        "Inbound Receptionist & Triage",
        "Sub-60s Outbound Speed-to-Lead",
        "Automated Follow-ups & Reminders",
        "Tata Telephony & CRM Auto-Sync"
      ],
      btnText: "Explore AI Voicebot →",
      btnLink: "/ai-solutions/ai-voicebot"
    },
    {
      title: "TECHNOLOGY SOLUTIONS",
      icon: faMicrochip,
      accent: "text-amber-500",
      bgAccent: "bg-amber-500/10",
      desc: "Leverage technology to automate processes, improve efficiency, and deliver better customer experiences.",
      items: [
        "Next.js High-Performance Web Apps",
        "iOS & Android Mobile Applications",
        "Bespoke Enterprise Software & CRMs",
        "Secure AWS Cloud Architecture & DevOps"
      ],
      btnText: "Explore Technology Solutions →",
      btnLink: "/technology-solutions"
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

        {/* 4 Cards Grid - Streamlined: Title, One-line Description & Direct Link */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="bg-card border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-[#2cd1a1]/50 group"
            >
              <div className="mb-6">
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className={`w-12 h-12 rounded-2xl ${card.bgAccent} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <FontAwesomeIcon icon={card.icon} className={`w-5 h-5 ${card.accent}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground leading-tight">{card.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>

              {/* Card Direct Link */}
              <div className="pt-4 border-t border-border/50">
                <Link
                  href={card.btnLink}
                  className="inline-flex items-center gap-2 font-bold text-sm text-[#073D7B] dark:text-[#2cd1a1] hover:underline group-hover:translate-x-1.5 transition-transform"
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

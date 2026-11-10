'use client';

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs, faComments, faFilter, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const TrustStrip = () => {
  const cards = [
    {
      title: "Attract",
      desc: "Reach the right audience.",
      icon: faCrosshairs,
      image: "/journey-attract.jpg",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      title: "Engage",
      desc: "Connect with customers across digital channels.",
      icon: faComments,
      image: "/journey-engage.jpg",
      color: "text-[#2cd1a1]",
      bg: "bg-[#2cd1a1]/10"
    },
    {
      title: "Qualify",
      desc: "Use AI to identify genuine opportunities.",
      icon: faFilter,
      image: "/journey-qualify.jpg",
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      title: "Convert",
      desc: "Help your sales team turn opportunities into business.",
      icon: faCircleCheck,
      image: "/journey-convert.jpg",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    }
  ];

  return (
    <section className="py-12 bg-muted/40 border-y border-border">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        
        {/* Social Proof Strip: Verified Enterprise Results & Ecosystem Logos */}
        <div className="mb-14 pb-12 border-b border-border/70">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mt-3">
              Measurable Outcomes Delivered Across 150+ Enterprise Deployments
            </h2>
          </div>

          {/* 4 Core Results Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { stat: "3.2x", label: "Admission & Student Enquiries", sub: "EdTech & Higher Education" },
              { stat: "4.8x", label: "Average Campaign ROAS", sub: "E-Commerce & DTC Brands" },
              { stat: "< 60s", label: "Speed-to-Lead Response", sub: "Real Estate & BFSI Funnels" },
              { stat: "-42%", label: "Cost Per Qualified Acquisition", sub: "Performance Marketing" },
            ].map((res, idx) => (
              <div 
                key={idx}
                className="bg-card border border-border/80 rounded-2xl p-5 text-center shadow-xs hover:border-[#2cd1a1]/40 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-black text-[#2cd1a1] tracking-tight mb-1">
                  {res.stat}
                </div>
                <div className="text-xs sm:text-sm font-bold text-foreground leading-snug mb-1">
                  {res.label}
                </div>
                <div className="text-[11px] text-muted-foreground">
                  {res.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Technology Partners & Trust Badges Marquee */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4 text-xs font-semibold text-muted-foreground">
            <span className="text-[11px] uppercase tracking-wider font-bold text-foreground/70">Trusted Tech Integrations:</span>
            <span className="px-3 py-1 rounded-lg bg-card border border-border/60 text-foreground">Meta Business Partner</span>
            <span className="px-3 py-1 rounded-lg bg-card border border-border/60 text-foreground">Google Ads Premier</span>
            <span className="px-3 py-1 rounded-lg bg-card border border-border/60 text-foreground">WhatsApp Cloud API</span>
            <span className="px-3 py-1 rounded-lg bg-card border border-border/60 text-foreground">AWS Cloud Infrastructure</span>
            <span className="px-3 py-1 rounded-lg bg-card border border-border/60 text-foreground">OpenAI Enterprise</span>
            <span className="px-3 py-1 rounded-lg bg-card border border-border/60 text-foreground">Anthropic Claude</span>
          </div>
        </div>

        {/* Strip Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-2">
            From Digital Visibility to Customer Conversations
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-[#2cd1a1] uppercase tracking-wider">
            <span>Attract</span>
            <span>•</span>
            <span>Engage</span>
            <span>•</span>
            <span>Qualify</span>
            <span>•</span>
            <span>Convert</span>
            <span>•</span>
            <span>Grow</span>
          </div>
        </div>

        {/* 4 Prominent Visual Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div 
              key={i} 
              className="bg-card border border-border/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-[#2cd1a1]/50 group"
            >
              {/* Visual Thumbnail - Taller aspect ratio with crisp photo rendering */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle bottom shadow line only for icon contrast, without fogging the photo */}
                <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                
                {/* Floating Icon */}
                <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-card/95 backdrop-blur-sm border border-border shadow-md flex items-center justify-center">
                  <FontAwesomeIcon icon={card.icon} className={`w-4 h-4 ${card.color}`} />
                </div>
              </div>

              {/* Card Content - Larger and crisp typography */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-1.5 group-hover:text-[#2cd1a1] transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustStrip;

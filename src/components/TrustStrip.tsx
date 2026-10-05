'use client';

import Image from "next/image";
import { Target, MessageCircle, Filter, CheckCircle } from "lucide-react";

const TrustStrip = () => {
  const cards = [
    {
      title: "Attract",
      desc: "Reach the right audience.",
      icon: Target,
      image: "/journey-attract.jpg",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      title: "Engage",
      desc: "Connect with customers across digital channels.",
      icon: MessageCircle,
      image: "/journey-engage.jpg",
      color: "text-[#2cd1a1]",
      bg: "bg-[#2cd1a1]/10"
    },
    {
      title: "Qualify",
      desc: "Use AI to identify genuine opportunities.",
      icon: Filter,
      image: "/journey-qualify.jpg",
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      title: "Convert",
      desc: "Help your sales team turn opportunities into business.",
      icon: CheckCircle,
      image: "/journey-convert.jpg",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    }
  ];

  return (
    <section className="py-12 bg-muted/40 border-y border-border">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        
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

        {/* 4 Clean Visual Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <div 
              key={i} 
              className="bg-card border border-border/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:border-[#2cd1a1]/50 group"
            >
              {/* Visual Thumbnail */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={312}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Icon */}
                <div className="absolute bottom-2.5 left-3 w-8 h-8 rounded-lg bg-card/90 backdrop-blur-md border border-border shadow flex items-center justify-center">
                  <card.icon className={`w-4 h-4 ${card.color}`} />
                </div>
              </div>

              {/* Exact Original Clean Content */}
              <div className="p-4 pt-3">
                <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-[#2cd1a1] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
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

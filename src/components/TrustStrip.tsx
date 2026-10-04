'use client';

import { Target, MessageCircle, Filter, CheckCircle } from "lucide-react";

const TrustStrip = () => {
  const cards = [
    {
      title: "Attract",
      desc: "Reach the right audience.",
      icon: Target,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "Engage",
      desc: "Connect with customers across digital channels.",
      icon: MessageCircle,
      color: "text-[#2cd1a1]",
      bg: "bg-[#2cd1a1]/10",
      border: "border-[#2cd1a1]/20"
    },
    {
      title: "Qualify",
      desc: "Use AI to identify genuine opportunities.",
      icon: Filter,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    {
      title: "Convert",
      desc: "Help your sales team turn opportunities into business.",
      icon: CheckCircle,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
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

        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <div 
              key={i} 
              className="bg-card border border-border/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between hover:border-[#2cd1a1]/50"
            >
              <div>
                <div className={`w-10 h-10 rounded-xl ${card.bg} ${card.color} flex items-center justify-center mb-3`}>
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{card.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustStrip;

'use client';

import { Target, Cpu, BarChart3, Users } from "lucide-react";

const WhyVMC = () => {
  const cards = [
    {
      title: "Business-Focused",
      desc: "We focus on your business objectives, not just marketing activity.",
      icon: Target,
      color: "text-[#073D7B] dark:text-blue-400"
    },
    {
      title: "Digital + AI",
      desc: "Combine digital marketing with AI-powered customer engagement.",
      icon: Cpu,
      color: "text-[#2cd1a1]"
    },
    {
      title: "Data-Driven",
      desc: "Use campaign and customer data to continuously improve performance.",
      icon: BarChart3,
      color: "text-purple-500"
    },
    {
      title: "Human + AI",
      desc: "Automation handles repetitive interactions while your team focuses on important customer relationships.",
      icon: Users,
      color: "text-amber-500"
    }
  ];

  return (
    <section className="py-20 bg-background relative border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Why Businesses Choose VMC Media
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            We believe digital marketing should do more than create visibility. It should create conversations, generate opportunities and contribute to business growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div 
              key={i} 
              className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#2cd1a1]/50"
            >
              <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 ${card.color}`}>
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{card.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyVMC;

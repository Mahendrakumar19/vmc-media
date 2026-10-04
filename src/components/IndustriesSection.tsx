'use client';

import { Building2, GraduationCap, Stethoscope, Landmark, ShoppingCart, Factory, Car, Briefcase } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    { title: "Real Estate", desc: "Lead generation, property enquiries, qualification and follow-ups.", icon: Building2 },
    { title: "Education", desc: "Student enquiries, counselling leads and admission communication.", icon: GraduationCap },
    { title: "Healthcare", desc: "Appointment enquiries, reminders and patient communication.", icon: Stethoscope },
    { title: "BFSI", desc: "Lead qualification, customer enquiries and follow-up automation.", icon: Landmark },
    { title: "Retail & E-commerce", desc: "Customer engagement, product enquiries and campaign support.", icon: ShoppingCart },
    { title: "Manufacturing", desc: "B2B lead generation, enquiry management and customer engagement.", icon: Factory },
    { title: "Automotive", desc: "Dealer enquiries, test-drive leads and customer follow-ups.", icon: Car },
    { title: "Professional Services", desc: "Lead generation, consultation enquiries and appointment booking.", icon: Briefcase }
  ];

  return (
    <section className="py-20 bg-background border-t border-border" id="industries">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Solutions Across Growing Industries
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Every industry has different customers, buying journeys and communication requirements. We adapt our digital marketing and AI solutions to your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <div 
              key={i} 
              className="bg-card border border-border/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:border-[#2cd1a1]/50 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#073D7B]/10 dark:bg-[#2cd1a1]/10 text-[#073D7B] dark:text-[#2cd1a1] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <ind.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{ind.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;

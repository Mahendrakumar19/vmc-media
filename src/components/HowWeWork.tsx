'use client';

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMagnifyingGlassChart, 
  faCompassDrafting, 
  faRocket, 
  faChartLine, 
  faArrowsSpin 
} from "@fortawesome/free-solid-svg-icons";

const HowWeWork = () => {
  const steps = [
    { 
      num: "01", 
      title: "Discover & Audit", 
      desc: "Deep audit of your current traffic, conversion friction, and CRM leakages to find quick ROI wins.",
      icon: faMagnifyingGlassChart,
      accent: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    { 
      num: "02", 
      title: "Architect & Funnel", 
      desc: "Blueprint bespoke conversational AI workflows, ad channels, and automated qualification rules.",
      icon: faCompassDrafting,
      accent: "text-amber-500",
      bg: "bg-amber-500/10"
    },
    { 
      num: "03", 
      title: "Deploy & Connect", 
      desc: "Go live with campaigns, voicebots, WhatsApp CRM, and Tata telephony integration in 48 hours.",
      icon: faRocket,
      accent: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    { 
      num: "04", 
      title: "Optimize & Score", 
      desc: "Real-time telemetry and deal scoring to eliminate poor lead quality and drop-offs.",
      icon: faChartLine,
      accent: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    { 
      num: "05", 
      title: "Scale & Catalyse", 
      desc: "Scale the highest-converting pipelines predictably with lower cost-per-acquisition.",
      icon: faArrowsSpin,
      accent: "text-[#2cd1a1]",
      bg: "bg-[#2cd1a1]/10"
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-muted/30 border-t border-border/80 relative overflow-hidden" id="how-we-work">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(44,209,161,0.06),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2cd1a1]/10 border border-[#2cd1a1]/25 text-[#2cd1a1] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Execution Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            From First Strategy to Predictable Scale
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            A structured, 5-stage deployment methodology designed to deliver measurable pipeline momentum in weeks, not months.
          </p>
        </motion.div>

        {/* 5-Step Connected Timeline */}
        <div className="relative">
          {/* Subtle connection line on desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/30 to-[#2cd1a1]/40 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-card border border-border/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xs hover:shadow-xl hover:border-[#2cd1a1]/50 hover:-translate-y-1.5 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Top Step Pill & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-2xl ${step.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <FontAwesomeIcon icon={step.icon} className={`w-5 h-5 ${step.accent}`} />
                    </div>
                    <span className="text-xs font-mono font-black text-muted-foreground/60 bg-muted px-2.5 py-1 rounded-full border border-border/60">
                      STAGE {step.num}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;

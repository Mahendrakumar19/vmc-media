'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBuilding, 
  faGraduationCap, 
  faHospital, 
  faLandmark, 
  faBagShopping, 
  faIndustry, 
  faCar, 
  faBriefcase,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const IndustriesSection = () => {
  const industries = [
    {
      title: "Real Estate & Builders",
      desc: "Speed-to-lead under 60 seconds, automated site-visit calendar sync, and broker WhatsApp routing.",
      icon: faBuilding,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      link: "/portfolio/real-estate",
      tags: ["Site Visit Booking", "Broker CRM", "Meta Lead Ads"]
    },
    {
      title: "Higher Education & EdTech",
      desc: "Omnichannel student acquisition, counselling round-robin allocation, and admission fee reconciliation.",
      icon: faGraduationCap,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      link: "/portfolio/college-consultancy",
      tags: ["Admission Funnels", "Counselor Routing", "WhatsApp Nudge"]
    },
    {
      title: "Healthcare & Hospitals",
      desc: "OPD triage, doctor appointment scheduling, lab test follow-ups, and automated reminder broadcasts.",
      icon: faHospital,
      color: "text-red-500",
      bg: "bg-red-500/10",
      link: "/portfolio/hospital",
      tags: ["OPD Booking", "Voice Triage", "Patient WhatsApp"]
    },
    {
      title: "BFSI & Wealth Management",
      desc: "High-net-worth lead qualification, instant loan pre-eligibility checks, and compliant document collection.",
      icon: faLandmark,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      link: "/contact",
      tags: ["HNW Scoring", "Instant KYC", "Loan Funnel"]
    },
    {
      title: "DTC & Retail Brands",
      desc: "Instant abandoned cart recovery on WhatsApp, seasonal flash sale campaigns, and automated delivery alerts.",
      icon: faBagShopping,
      color: "text-pink-500",
      bg: "bg-pink-500/10",
      link: "/portfolio/ecommerce",
      tags: ["Cart Recovery", "Meta Catalog", "Payment Links"]
    },
    {
      title: "Manufacturing & B2B",
      desc: "Industrial procurement pipelines, dealer network routing, and automated bulk RFQ follow-ups.",
      icon: faIndustry,
      color: "text-slate-500",
      bg: "bg-slate-500/10",
      link: "/contact",
      tags: ["B2B RFQs", "Dealer CRM", "Lead Routing"]
    },
    {
      title: "Automotive Showrooms",
      desc: "Test-drive bookings, digital showroom leads, and automated post-visit finance follow-up sequencing.",
      icon: faCar,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
      link: "/contact",
      tags: ["Test-Drive Sync", "Finance Nudge", "EV Leads"]
    },
    {
      title: "Professional Services",
      desc: "High-ticket corporate consulting enquiries, legal advisory intake, and seamless calendar bookings.",
      icon: faBriefcase,
      color: "text-[#2cd1a1]",
      bg: "bg-[#2cd1a1]/10",
      link: "/contact",
      tags: ["Executive Calendar", "Intent Scoring", "Invoicing"]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-background border-t border-border/80 relative overflow-hidden" id="industries">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#073D7B]/5 dark:bg-[#2cd1a1]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2cd1a1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#073D7B]/10 dark:bg-[#2cd1a1]/10 text-[#073D7B] dark:text-[#2cd1a1] text-xs font-bold tracking-wider uppercase mb-3">
            <span>Specialised Vertical Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Engineered for High-Growth Sectors
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Every vertical has unique buyer friction and compliance requirements. We deploy pre-configured AI conversational models and targeted ad architectures purpose-built for your industry.
          </p>
        </motion.div>

        {/* Crisp Enterprise Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {industries.map((ind, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card border border-border/80 rounded-2xl sm:rounded-3xl p-6 shadow-xs hover:shadow-xl hover:border-[#2cd1a1]/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl ${ind.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <FontAwesomeIcon icon={ind.icon} className={`w-5 h-5 ${ind.color}`} />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {ind.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {ind.desc}
                </p>

                {/* Micro Feature Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1 mb-6">
                  {ind.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-muted text-[10px] font-medium text-muted-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <Link
                href={ind.link}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground group-hover:text-[#2cd1a1] transition-colors pt-2 border-t border-border/50"
              >
                <span>Explore Workflow</span>
                <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;

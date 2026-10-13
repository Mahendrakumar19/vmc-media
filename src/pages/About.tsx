"use client";
import SEO from "@/components/SEO";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faLightbulb,
  faAward,
  faChartLine,
  faBrain,
  faShieldHalved,
  faCloud,
  faComments,
  faCircleCheck,
  faArrowRight,
  faBuilding,
  faUsers,
  faBolt
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const approach = [
    {
      icon: faBullseye,
      accent: "text-blue-500",
      bg: "bg-blue-500/10",
      title: "Understand Your Business DNA",
      description:
        "We begin by mapping your technology landscape, pain points, and strategic growth objectives to engineer the right AI and IT roadmap.",
    },
    {
      icon: faLightbulb,
      accent: "text-amber-500",
      bg: "bg-amber-500/10",
      title: "Design an Intelligent Strategy",
      description:
        "Every enterprise is unique. We architect tailored AI, cloud, and digital solutions aligned with your industry and business model.",
    },
    {
      icon: faAward,
      accent: "text-purple-500",
      bg: "bg-purple-500/10",
      title: "Execute with Precision",
      description:
        "Our certified technology experts deploy, integrate, and manage solutions with meticulous attention to security, scalability, and performance.",
    },
    {
      icon: faChartLine,
      accent: "text-[#2cd1a1]",
      bg: "bg-[#2cd1a1]/10",
      title: "Optimise, Scale & Catalyse",
      description:
        "We continuously monitor, fine-tune, and evolve your digital ecosystem to maximise ROI and accelerate long-term growth.",
    },
  ];

  const capabilities = [
    {
      icon: faBrain,
      accent: "text-[#2cd1a1]",
      bg: "bg-[#2cd1a1]/10",
      title: "Generative & Conversational AI",
      description:
        "Harness the power of large language models, AI chatbots, and intelligent automation to reimagine customer experiences and internal operations.",
    },
    {
      icon: faCloud,
      accent: "text-blue-500",
      bg: "bg-blue-500/10",
      title: "IT Infrastructure & Cloud Services",
      description:
        "End-to-end cloud migration, managed IT infrastructure, and hybrid multi-cloud architectures built for reliability and scale.",
    },
    {
      icon: faShieldHalved,
      accent: "text-emerald-500",
      bg: "bg-emerald-500/10",
      title: "Cybersecurity Solutions",
      description:
        "Proactive threat detection, zero-trust frameworks, and compliance-ready security postures that protect your digital assets.",
    },
    {
      icon: faComments,
      accent: "text-purple-500",
      bg: "bg-purple-500/10",
      title: "Omnichannel Communication",
      description:
        "Unified cloud communication platforms—CPaaS, UCaaS, WhatsApp Business API, and more—to engage customers across every touchpoint.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="About Us | VMC Media - AI-Driven IT Solutions & Digital Transformation"
        description="VMC Media is an AI-driven IT solutions and services company empowering businesses with next-generation technology—cloud, cybersecurity, generative AI, and omnichannel communication."
        canonical="/about"
      />

      {/* Hero Section - Clean Meritto Style with Pill Badge & Perfect Hierarchy */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 bg-gradient-to-b from-background via-muted/30 to-background border-b border-border/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(44,209,161,0.08),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-[#2cd1a1] text-xs font-bold tracking-wider uppercase mb-5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#2cd1a1] animate-pulse" />
              <span>The Next-Generation Digital & AI Agency</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.12] mb-5">
              Empowering Businesses with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2cd1a1] via-teal-400 to-blue-500">
                AI &amp; Digital Precision
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-normal mb-8">
              We combine 14+ years of digital marketing mastery with proprietary conversational AI and enterprise cloud infrastructure to turn digital reach into predictable revenue.
            </p>

            {/* Meritto-Inspired Clean Telemetry Proof Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4">
              {[
                { number: "14+", label: "Years Industry Leadership" },
                { number: "150+", label: "Enterprise Implementations" },
                { number: "<60s", label: "Speed-To-Lead AI Response" },
                { number: "95%", label: "Client Retention Rate" },
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="bg-card/70 backdrop-blur-sm border border-border/80 rounded-2xl p-4 sm:p-5 text-center shadow-xs hover:border-[#2cd1a1]/40 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-black text-foreground tracking-tight mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Side - Image with Clean Border Radius & Shadow */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/80 group">
                <img
                  src="/about-vmc-agency.png"
                  alt="VMC Media AI-Driven IT Solutions Team"
                  className="w-full h-[380px] sm:h-[460px] object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-wider">
                <span>Who We Are</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                AI-Driven IT Solutions &amp; Digital Transformation
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                VMC Media Pvt. Ltd. is an AI-driven IT solutions and services company dedicated to empowering businesses with next-generation technology. We specialise in delivering end-to-end IT infrastructure, communication solutions (Chatbots, Voicebots, Cloud Telephony, IVR, WhatsApp CRM), digital transformation, cloud services and cybersecurity offerings tailored for the B2B sector.
              </p>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We combine deep domain expertise with a strong AI and cloud-centric approach to modernise business operations—helping enterprises adopt Smart Digital Solutions across connectivity, cloud communications, cybersecurity, productivity, omnichannel engagement, and more.
              </p>

              {/* Vision & Mission Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 sm:p-5 rounded-2xl bg-card border border-border/80 shadow-xs hover:border-[#2cd1a1]/40 transition-colors">
                  <h3 className="text-base font-bold text-foreground mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2cd1a1]" />
                    <span>Our Vision</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    To become a leading AI and technology solutions partner, enabling Indian and global enterprises to unlock their full digital potential through innovation, intelligence, and impact.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-card border border-border/80 shadow-xs hover:border-blue-500/40 transition-colors">
                  <h3 className="text-base font-bold text-foreground mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>Our Mission</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    To deliver secure, scalable, and future-ready digital solutions that modernise operations, accelerate growth, and create lasting competitive advantage for businesses of every size.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section - Meritto Clean Card Design */}
      <section className="py-16 sm:py-24 bg-muted/30 border-y border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2cd1a1]/10 border border-[#2cd1a1]/25 text-[#2cd1a1] text-xs font-bold uppercase tracking-wider mb-3">
              <span>What We Deliver</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
              Our Core Capabilities
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              We bring together AI, cloud, and enterprise technology to deliver transformative outcomes across every layer of your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-card border border-border/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-xl hover:border-[#2cd1a1]/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 ${item.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <FontAwesomeIcon icon={item.icon} className={`w-5 h-5 ${item.accent}`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section - Connected Stepper Process Flow */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-500 text-xs font-bold uppercase tracking-wider mb-3">
              <span>Methodology &amp; Execution</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
              Our 4-Stage Precision Approach
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              A structured, AI-augmented methodology that transforms complexity into clarity and ideas into measurable business outcomes.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {approach.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-card border border-border/80 rounded-2xl sm:rounded-3xl p-6 shadow-xs hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-4 right-5 text-3xl font-black text-muted/30 select-none">
                  0{index + 1}
                </div>
                <div>
                  <div className={`w-11 h-11 ${item.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <FontAwesomeIcon icon={item.icon} className={`w-5 h-5 ${item.accent}`} />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Balanced 2-Column Grid */}
      <section className="py-16 sm:py-24 bg-muted/30 border-t border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2cd1a1]/10 border border-[#2cd1a1]/25 text-[#2cd1a1] text-xs font-bold uppercase tracking-wider">
                <span>Enterprise Trust</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Why Industry Leaders Choose VMC Media
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We combine technical depth with enterprise agility. Here is why high-growth brands and institutions partner with us:
              </p>
              <ul className="space-y-3.5 pt-2">
                {[
                  "14+ years of proven technology and digital marketing mastery",
                  "End-to-end AI chatbots, voicebots, and IT infrastructure",
                  "150+ successful enterprise and B2B deployments across India",
                  "95% client retention rate reflecting our commitment to ROI",
                  "Certified professionals across AI models, AWS & cloud frameworks",
                  "Seamless integration with Tata Teleservices, WhatsApp CRM & CPaaS",
                  "Customised architectures built around your exact growth funnel",
                  "Dedicated relationship management with 24/7 SLA monitoring",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-foreground/90">
                    <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-[#2cd1a1] shrink-0 mt-1" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="bg-card border border-border/80 rounded-3xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span>Our Core Principles</span>
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      title: "Innovation First",
                      desc: "We stay at the frontier of AI and cloud technology, constantly evolving our platforms to keep clients ahead of their competition.",
                    },
                    {
                      title: "Security & Zero-Trust",
                      desc: "Every deployment adheres to security-by-default standards, ensuring strict data residency, privacy, and regulatory compliance.",
                    },
                    {
                      title: "Transparent Attribution",
                      desc: "Open communication, crystal-clear SLAs, and real-time telemetry so you always measure the exact ROI of your campaigns.",
                    },
                    {
                      title: "Partnership Mindset",
                      desc: "Your revenue growth is our milestone. We operate as an embedded technology arm rather than a detached vendor.",
                    },
                  ].map((val, idx) => (
                    <div key={idx} className="pb-4 border-b border-border/50 last:border-none last:pb-0">
                      <h4 className="font-bold text-sm sm:text-base text-foreground mb-1">{val.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Full-Width Clean Gradient Card */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#012766] via-[#073D7B] to-[#011a47] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(44,209,161,0.15),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Ready to Accelerate Your Growth with AI?
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss how our conversational AI, targeted digital marketing, and cloud solutions can transform your customer acquisition funnel.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2cd1a1] hover:bg-[#27b98f] text-slate-950 font-black px-8 py-4 rounded-2xl text-base shadow-xl shadow-[#2cd1a1]/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>Schedule a Free Strategy Call</span>
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

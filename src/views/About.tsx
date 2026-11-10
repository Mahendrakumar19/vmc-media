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
import { Bot, Cpu, Sparkles, Network, Globe, Zap, BarChart3, ShieldCheck } from "lucide-react";

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

      {/* Hero Section - Clean Meritto Style with Pill Badge & Animated Floating Icons */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 bg-gradient-to-b from-background via-muted/30 to-background border-b border-border/60 relative overflow-hidden">
        {/* Subtle Architectural Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        {/* 10% Visibility Gradient Art / Abstract Wave Lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <svg className="w-full h-full min-w-[1000px]" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M-100 200 C 300 50, 600 450, 1000 220 C 1200 100, 1400 350, 1600 250"
              stroke="url(#gradient-art-1)"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              fill="none"
            />
            <path
              d="M-100 260 C 250 120, 650 500, 1050 280 C 1250 160, 1450 400, 1600 310"
              stroke="url(#gradient-art-2)"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M-100 320 C 350 180, 550 420, 950 200 C 1150 80, 1350 300, 1600 220"
              stroke="url(#gradient-art-1)"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Ambient Conic Mesh Blob */}
            <circle cx="200" cy="180" r="140" fill="url(#gradient-blob-1)" filter="blur(40px)" />
            <circle cx="1200" cy="220" r="160" fill="url(#gradient-blob-2)" filter="blur(50px)" />
            <circle cx="720" cy="120" r="120" fill="url(#gradient-blob-1)" filter="blur(45px)" />
            
            <defs>
              <linearGradient id="gradient-art-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2cd1a1" />
                <stop offset="50%" stopColor="#00c6ff" />
                <stop offset="100%" stopColor="#0072ff" />
              </linearGradient>
              <linearGradient id="gradient-art-2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0072ff" />
                <stop offset="50%" stopColor="#2cd1a1" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
              <linearGradient id="gradient-blob-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2cd1a1" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0072ff" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="gradient-blob-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00c6ff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Ambient Gradient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(44,209,161,0.12),transparent_70%)] pointer-events-none" />

        {/* Decorative Floating Tech & AI Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden max-w-7xl mx-auto">
          {/* Top Left: AI Bot */}
          <motion.div 
            animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-6 sm:left-14 w-12 h-12 rounded-2xl bg-card/80 border border-[#2cd1a1]/25 backdrop-blur-md shadow-lg shadow-[#2cd1a1]/5 hidden sm:flex items-center justify-center text-[#2cd1a1]"
          >
            <Bot className="w-6 h-6" />
          </motion.div>

          {/* Top Right: Network / Neural Cloud */}
          <motion.div 
            animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-20 right-6 sm:right-16 w-12 h-12 rounded-2xl bg-card/80 border border-blue-500/25 backdrop-blur-md shadow-lg shadow-blue-500/5 hidden sm:flex items-center justify-center text-blue-500"
          >
            <Network className="w-6 h-6" />
          </motion.div>

          {/* Mid Left: Analytics Growth */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-52 left-4 sm:left-28 w-11 h-11 rounded-2xl bg-card/80 border border-purple-500/20 backdrop-blur-md shadow-md hidden md:flex items-center justify-center text-purple-500"
          >
            <BarChart3 className="w-5 h-5" />
          </motion.div>

          {/* Mid Right: Microchip Processor */}
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-48 right-4 sm:right-28 w-11 h-11 rounded-2xl bg-card/80 border border-teal-400/20 backdrop-blur-md shadow-md hidden md:flex items-center justify-center text-teal-400"
          >
            <Cpu className="w-5 h-5" />
          </motion.div>

          {/* Far Left Subtle Spark: Zap */}
          <motion.div 
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-28 left-8 w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm hidden lg:flex items-center justify-center text-amber-500"
          >
            <Zap className="w-4 h-4" />
          </motion.div>

          {/* Far Right Subtle: Global Scale */}
          <motion.div 
            animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute bottom-24 right-10 w-9 h-9 rounded-xl bg-[#2cd1a1]/10 border border-[#2cd1a1]/25 backdrop-blur-sm hidden lg:flex items-center justify-center text-[#2cd1a1]"
          >
            <Globe className="w-4 h-4" />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.12] mb-5 [text-wrap:balance]">
              Empowering Businesses with&nbsp;
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
                  {/* Clean Icon + Title Inline Alignment */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <FontAwesomeIcon icon={item.icon} className={`w-5 h-5 ${item.accent}`} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-0 sm:pl-[60px]">{item.description}</p>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
              Our 4-Stage Precision Approach
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              A structured, AI-augmented methodology that transforms complexity into clarity and ideas into measurable business outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {approach.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-card border border-border/80 rounded-2xl sm:rounded-3xl p-6 shadow-xs hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden h-full"
              >
                <div className="absolute top-4 right-5 text-3xl font-black text-muted/30 select-none">
                  0{index + 1}
                </div>
                <div>
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <FontAwesomeIcon icon={item.icon} className={`w-4 h-4 ${item.accent}`} />
                    </div>
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
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
                  "Seamless integration with WhatsApp Cloud API, Telephony APIs & Enterprise CRM",
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

      {/* Leadership & Engineering Team Section */}
      <section className="py-16 sm:py-24 bg-background border-t border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
              <FontAwesomeIcon icon={faUsers} className="w-4 h-4 text-[#2cd1a1]" />
              <span>Leadership &amp; Engineering</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
              The Minds Engineering Your Digital Moat
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Seasoned performance marketers, conversational AI architects, and full-stack software engineers dedicated to high-velocity enterprise scaling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Mahendra Kumar",
                role: "Managing Director & Chief Strategist",
                specialty: "Digital Transformation & Performance Funnels",
                initials: "MK",
                bg: "bg-blue-500/10 text-blue-500 border-blue-500/30",
                linkedin: "https://www.linkedin.com/company/vmc-media/"
              },
              {
                name: "Pooja Sharma",
                role: "Head of Conversational AI & Products",
                specialty: "AI Voicebots & WhatsApp CRM Architecture",
                initials: "PS",
                bg: "bg-[#2cd1a1]/10 text-[#2cd1a1] border-[#2cd1a1]/30",
                linkedin: "https://www.linkedin.com/company/vmc-media/"
              },
              {
                name: "Amit Patel",
                role: "VP of Enterprise Engineering",
                specialty: "Cloud Architecture & High-Scale Systems",
                initials: "AP",
                bg: "bg-purple-500/10 text-purple-500 border-purple-500/30",
                linkedin: "https://www.linkedin.com/company/vmc-media/"
              },
              {
                name: "Neha Verma",
                role: "Principal Growth & Performance Lead",
                specialty: "Full-Funnel Paid Acquisition & Attribution",
                initials: "NV",
                bg: "bg-amber-500/10 text-amber-500 border-amber-500/30",
                linkedin: "https://www.linkedin.com/company/vmc-media/"
              }
            ].map((member, mIdx) => (
              <motion.div
                key={mIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: mIdx * 0.1 }}
                className="bg-card border border-border/80 rounded-3xl p-6 shadow-xs hover:shadow-xl hover:border-[#2cd1a1]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Avatar Placeholder */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center font-extrabold text-lg shadow-sm ${member.bg} group-hover:scale-105 transition-transform`}>
                      {member.initials}
                    </div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn Profile`}
                      className="w-9 h-9 rounded-xl bg-muted/60 hover:bg-[#0A66C2] hover:text-white text-muted-foreground flex items-center justify-center transition-all cursor-pointer border border-border/50"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                    </a>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#2cd1a1] mb-2.5">
                    {member.role}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {member.specialty}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-border/50 flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2cd1a1]" />
                  <span>Verified Leadership</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Proof & Enterprise Testimonials Section */}
      <section className="py-16 sm:py-24 bg-muted/30 border-t border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2cd1a1] bg-[#2cd1a1]/10 px-3.5 py-1 rounded-full border border-[#2cd1a1]/20">
              Client Proof &amp; Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mt-3 mb-4">
              Trusted by High-Velocity Growth Leaders
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Real results delivered for enterprises across education, luxury real estate, healthcare, and financial services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "VMC Media scaled our student admission enquiries by 3.2x within 60 days while reducing cost per qualified lead by 42%. Their WhatsApp CRM integration has been transformative for our 15-member counseling desk.",
                client: "Director of Admissions",
                org: "Prominent Higher Education University",
                result: "3.2x Enquiry Surge",
                tagColor: "text-blue-500 bg-blue-500/10 border-blue-500/20"
              },
              {
                quote: "Their AI Voicebot responds in under 30 seconds to new property enquiries. Our on-ground site-visit show-up rate surged by 45% within the first month of deployment.",
                client: "VP of Marketing",
                org: "Luxury Real Estate Developer",
                result: "+45% Site Visits",
                tagColor: "text-[#2cd1a1] bg-[#2cd1a1]/10 border-[#2cd1a1]/20"
              },
              {
                quote: "The level of engineering rigor and transparent ROI attribution is exceptional. They don't just run ads—they built an automated patient triage and OPD appointment pipeline.",
                client: "Chief Operating Officer",
                org: "Multi-Specialty Healthcare Network",
                result: "60s Speed-to-Lead",
                tagColor: "text-purple-500 bg-purple-500/10 border-purple-500/20"
              }
            ].map((t, idx) => (
              <div 
                key={idx}
                className="bg-card border border-border/80 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-[#2cd1a1]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-md border ${t.tagColor}`}>
                      {t.result}
                    </span>
                    <div className="flex gap-1 text-amber-400 text-xs">
                      {"★".repeat(5)}
                    </div>
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="text-xs font-bold text-foreground">{t.client}</div>
                  <div className="text-[11px] text-muted-foreground">{t.org}</div>
                </div>
              </div>
            ))}
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
                <span>Connect with Our Experts</span>
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

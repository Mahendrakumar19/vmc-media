import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import LocalSEOStrip from "@/components/LocalSEOStrip";
import CTA from "@/components/CTA";
import Link from "next/link";
import Image from "next/image";
import { 
  Code2, Smartphone, Globe, Cpu, Cloud, Layers, 
  ArrowRight, CheckCircle2, Sparkles, ShieldCheck, Zap, 
  Database, Server, Terminal, Lock, ChevronRight, Users, 
  Workflow, GitBranch
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technology Solutions & Custom Software Engineering | VMC Media",
  description: "Enterprise web development, native iOS & Android mobile apps, bespoke software platforms, and cloud architecture built by VMC Media to scale modern businesses.",
  alternates: {
    canonical: "https://www.vmcmedia.in/services/technology-solutions",
  },
  openGraph: {
    title: "Technology Solutions & Custom Software Engineering | VMC Media",
    description: "Enterprise web applications, mobile apps, custom software, and cloud architecture engineered for scale and high performance.",
    url: "https://www.vmcmedia.in/services/technology-solutions",
    siteName: "VMC Media",
    type: "website",
  },
};

export default function TechnologySolutionsPage() {
  const pillars = [
    {
      title: "Web Application Development",
      badge: "Fast & SEO-First",
      badgeColor: "text-blue-500 bg-blue-500/10 border-blue-500/20",
      icon: Globe,
      description: "High-performance Next.js 15, React, and TypeScript web platforms engineered for lightning-fast speeds, dynamic reactivity, and enterprise scalability.",
      features: [
        "Headless CMS & Dynamic Catalog Systems",
        "Sub-second Core Web Vitals & Technical SEO",
        "Interactive Dashboards & SaaS User Portals",
        "Role-Based Access Control (RBAC) & Secure Auth"
      ],
      href: "/services/web-development",
      cta: "Explore Web Solutions"
    },
    {
      title: "Mobile App Development",
      badge: "iOS & Android",
      badgeColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
      icon: Smartphone,
      description: "Cross-platform Flutter & React Native applications with native iOS and Android performance, integrated AI recommendation engines, and seamless checkout flows.",
      features: [
        "Single Codebase for Apple App Store & Google Play",
        "Native Device APIs: Biometrics, Geolocation, Push",
        "Razorpay, Stripe & WhatsApp Automation Inside",
        "Offline Sync & Microsecond Database Performance"
      ],
      href: "/services/mobile-app",
      cta: "Explore Mobile Apps"
    },
    {
      title: "Custom Software Development",
      badge: "Tailor-Made Systems",
      badgeColor: "text-purple-500 bg-purple-500/10 border-purple-500/20",
      icon: Cpu,
      description: "Bespoke internal software platforms, custom CRMs, workflow automation pipelines, and third-party API orchestrations tailored directly to your operational blueprint.",
      features: [
        "Proprietary CRM & Multi-Branch ERP Systems",
        "Custom API Integrations & Webhook Automation",
        "Real-Time Business Intelligence & Reporting Dashboards",
        "Legacy Codebase Refactoring & Migration"
      ],
      href: "/services/custom-software",
      cta: "Explore Custom Software"
    },
    {
      title: "Cloud Infrastructure & DevOps",
      badge: "99.99% Uptime",
      badgeColor: "text-amber-500 bg-amber-500/10 border-amber-500/20",
      icon: Cloud,
      description: "Auto-scaling AWS, Vercel, and Cloudflare enterprise architectures featuring automated CI/CD pipelines, container orchestration, and DDoS protection.",
      features: [
        "AWS (ECS, Lambda, RDS) & Global Edge CDN",
        "Automated GitHub Actions CI/CD Deployments",
        "PostgreSQL, Redis & Vector Database Optimization",
        "Bank-Grade SSL, WAF Firewalls & Automated Backups"
      ],
      href: "/services/cloud-deployment",
      cta: "Explore Cloud Solutions"
    }
  ];

  const techStack = [
    { name: "Next.js 15 & React", category: "Frontend Framework" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js & Python", category: "Backend Microservices" },
    { name: "Flutter & React Native", category: "Mobile Engineering" },
    { name: "PostgreSQL & Prisma", category: "Relational Database" },
    { name: "Redis & Vector DBs", category: "In-Memory & AI Search" },
    { name: "AWS & Vercel Edge", category: "Cloud Infrastructure" },
    { name: "Docker & GitHub Actions", category: "CI/CD & DevOps" }
  ];

  const devWorkflow = [
    {
      step: "01",
      title: "Discovery & Architecture Blueprint",
      desc: "We analyze your business workflow, define database models, map API integrations, and architect an enterprise tech stack before writing a single line of code."
    },
    {
      step: "02",
      title: "Agile Sprint Development",
      desc: "Bi-weekly milestone delivery with live staging environments, automated unit tests, and rigorous code reviews to ensure spotless reliability."
    },
    {
      step: "03",
      title: "Security, Load & Speed Audits",
      desc: "Penetration checks, database indexing, Core Web Vitals optimization, and simulated heavy traffic stress tests to ensure 99.99% system resilience."
    },
    {
      step: "04",
      title: "Deployment & Post-Launch Scale",
      desc: "Zero-downtime production release backed by 24/7 server telemetry, crash monitoring, ongoing feature updates, and SLA-backed maintenance."
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#073D7B]/10 via-background to-background border-b border-border">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#073D7B]/15 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#2cd1a1]/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073D7B]/10 dark:bg-[#073D7B]/30 border border-[#073D7B]/20 text-[#073D7B] dark:text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
            <Code2 className="w-4 h-4 text-[#2cd1a1]" />
            <span>End-to-End Technology &amp; Engineering</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.15]">
            Enterprise Technology Solutions <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#073D7B] via-blue-600 to-[#2cd1a1] bg-clip-text text-transparent">
              Engineered for Scalable Growth
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
            From modern Next.js web applications and cross-platform iOS &amp; Android mobile apps to custom enterprise CRMs and secure cloud DevOps, we build robust software that transforms business operations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#2cd1a1] hover:bg-[#27b98f] text-slate-950 font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-[#2cd1a1]/20 hover:scale-[1.02] transition-all"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="#pillars"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-card hover:bg-muted border border-border text-foreground font-semibold px-7 py-4 rounded-xl text-base transition-all"
            >
              <span>View Solutions Matrix</span>
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto pt-10 border-t border-border/60">
            <div className="p-4 rounded-xl bg-card/60 border border-border/60 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-foreground">99.99%</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Uptime Reliability</div>
            </div>
            <div className="p-4 rounded-xl bg-card/60 border border-border/60 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#2cd1a1]">&lt; 100ms</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">API Response Latency</div>
            </div>
            <div className="p-4 rounded-xl bg-card/60 border border-border/60 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#073D7B] dark:text-blue-400">100/100</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Lighthouse Speed Score</div>
            </div>
            <div className="p-4 rounded-xl bg-card/60 border border-border/60 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-500">Bank-Grade</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Security &amp; Encryption</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section id="pillars" className="py-24 bg-background relative border-b border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-4">
              Our Core Technology Pillars
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Comprehensive full-stack engineering tailored to automate operations, accelerate customer acquisition, and scale business infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="bg-card border border-border rounded-3xl p-8 hover:border-[#2cd1a1]/50 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#073D7B]/10 dark:bg-[#073D7B]/20 text-[#073D7B] dark:text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#2cd1a1]/10 group-hover:text-[#2cd1a1] transition-all">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${pillar.badgeColor}`}>
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {pillar.description}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      {pillar.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-sm text-foreground/90">
                          <CheckCircle2 className="w-4 h-4 text-[#2cd1a1] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={pillar.href}
                    className="inline-flex items-center justify-between w-full p-4 rounded-xl bg-muted/60 hover:bg-primary hover:text-white text-foreground font-semibold text-sm transition-all group-hover:shadow-md"
                  >
                    <span>{pillar.cta}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Showcase: Mobile & Web Synergy */}
      <section className="py-20 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2cd1a1]/10 text-[#2cd1a1] text-xs font-bold uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Integrated Ecosystem</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6 leading-tight">
                Unified Architecture Across Web, Mobile, and Internal Admin
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We don’t build disconnected silos. Every web app, mobile app, and backend system connects to a single source of truth—sharing databases, authentication tokens, payment webhooks, and automated WhatsApp alert triggers.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-card border border-border">
                  <div className="font-bold text-foreground text-sm mb-1 flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#2cd1a1]" /> Single Database
                  </div>
                  <p className="text-xs text-muted-foreground">Unified customer profiles, orders, and sales telemetry across all apps.</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <div className="font-bold text-foreground text-sm mb-1 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-500" /> Instant Webhooks
                  </div>
                  <p className="text-xs text-muted-foreground">Real-time alerts to WhatsApp, email, and internal CRM within milliseconds.</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <div className="font-bold text-foreground text-sm mb-1 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-blue-500" /> Enterprise Auth
                  </div>
                  <p className="text-xs text-muted-foreground">OAuth, JWT, and multi-factor authentication with role-based permissions.</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <div className="font-bold text-foreground text-sm mb-1 flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-purple-500" /> AI Integrations
                  </div>
                  <p className="text-xs text-muted-foreground">Native LLM chatbots, voicebot API hooks, and predictive lead scoring.</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl bg-card p-3">
              <Image 
                src="/custom-mobile-app-showcase.jpg"
                alt="Technology Solutions Showcase - VMC Media"
                width={700}
                height={500}
                className="w-full h-auto rounded-2xl object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#2cd1a1]">Cross-Platform Readiness</div>
                  <div className="text-sm font-bold">iOS • Android • Web • Cloud Admin</div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-md bg-[#2cd1a1]/20 text-[#2cd1a1] font-mono font-bold">
                  v2.5 Live
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-foreground tracking-tight mb-3">
              Modern, Enterprise-Grade Technology Stack
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              We leverage production-proven modern frameworks to eliminate legacy tech debt and provide maximum speed, security, and developer ergonomics.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStack.map((tech, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-md transition-all text-center"
              >
                <div className="font-bold text-foreground text-base mb-1">{tech.name}</div>
                <div className="text-xs text-muted-foreground">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Workflow */}
      <section className="py-24 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-4">
              Our 4-Stage Engineering Process
            </h2>
            <p className="text-muted-foreground text-base">
              Predictable timelines, clean code conventions, and transparent milestones from concept to production release.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {devWorkflow.map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-2xl p-6 relative flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-black text-[#073D7B] dark:text-blue-400 mb-4 font-mono">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#073D7B] to-slate-900 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to Build Your Custom Software Solution?
          </h2>
          <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Discuss your technical architecture with our engineering team. Get an in-depth scope assessment, tech stack recommendation, and timeline estimate.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#2cd1a1] hover:bg-[#27b98f] text-slate-950 font-bold px-8 py-4 rounded-xl text-base shadow-xl hover:scale-105 transition-all"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <ContactSection />
      <LocalSEOStrip />
      <CTA />
      <Footer />
    </main>
  );
}

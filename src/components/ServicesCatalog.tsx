'use client';

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, CheckCircle2, Search, Target, Share2, MapPin, 
  BarChart3, ShoppingCart, PenTool, Globe, MessageSquare, Mic, 
  Bot, Sparkles, TrendingUp, ShieldCheck, Zap
} from "lucide-react";

export function ServicesCatalog() {
  const [activeTab, setActiveTab] = useState<"acquisition" | "conversion" | "automation">("acquisition");

  const categories = {
    acquisition: {
      name: "Performance Acquisition",
      badge: "Paid & Organic Demand",
      description: "Scale high-intent customer acquisition through Google Ads, Meta funnels, local search dominance, and e-commerce scaling.",
      services: [
        {
          title: "Google Ads & PPC Campaigns",
          tag: "Paid Search & PMax",
          impact: "Laser-targeted search & Performance Max campaigns engineered for immediate lead generation with positive ROAS.",
          href: "/services/google-ads",
          icon: Target,
          accent: "text-blue-500 bg-blue-500/10 border-blue-500/20",
          stats: "Up to 4.2x ROAS"
        },
        {
          title: "Social Media Marketing (SMM)",
          tag: "Meta & LinkedIn Funnels",
          impact: "Full-funnel creative ads across Facebook, Instagram & LinkedIn to capture customer attention and drive qualified inquiries.",
          href: "/services/smm",
          icon: Share2,
          accent: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
          stats: "<60s Lead Capture"
        },
        {
          title: "E-Commerce Growth Marketing",
          tag: "Shopify & DTC Scaling",
          impact: "Scale DTC brands with high-converting shopping ads, dynamic catalog remarketing, and lifecycle retention flows.",
          href: "/services/ecommerce",
          icon: ShoppingCart,
          accent: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
          stats: "+140% GMV Lift"
        },
        {
          title: "Local SEO & GMB Domination",
          tag: "Google Map Pack #1",
          impact: "Dominate Google 3-pack local map rankings to capture high-intent nearby customers actively calling your business.",
          href: "/services/local-seo",
          icon: MapPin,
          accent: "text-amber-500 bg-amber-500/10 border-amber-500/20",
          stats: "Top 3 Ranking Guarantee"
        },
        {
          title: "Search Engine Optimization (SEO)",
          tag: "Organic Google Search",
          impact: "Rank #1 for commercial keywords with technical site audits, content architecture, and authoritative backlink strategies.",
          href: "/services/seo",
          icon: Search,
          accent: "text-purple-500 bg-purple-500/10 border-purple-500/20",
          stats: "+220% Organic Traffic"
        }
      ]
    },
    conversion: {
      name: "Conversion & Brand",
      badge: "Funnels & Creative",
      description: "Turn clicks into pipeline value through Conversion Rate Optimization, bespoke web engineering, brand identity, and reputation.",
      services: [
        {
          title: "Conversion Rate Optimization (CRO)",
          tag: "Funnel & UX Optimization",
          impact: "Transform existing traffic into paying clients with data-driven A/B testing, heatmaps, and friction-free landing page UX.",
          href: "/services/cro",
          icon: BarChart3,
          accent: "text-[#2cd1a1] bg-[#2cd1a1]/10 border-[#2cd1a1]/20",
          stats: "+46% Conversion Lift"
        },
        {
          title: "Branding & Creative Design",
          tag: "Visual Identity & Copy",
          impact: "Establish high-trust market positioning with visual guidelines, conversion copy, and premium digital asset production.",
          href: "/services/branding",
          icon: PenTool,
          accent: "text-pink-500 bg-pink-500/10 border-pink-500/20",
          stats: "100% Bespoke Identity"
        },
        {
          title: "Web & SaaS Development",
          tag: "Next.js 15 & Cloud",
          impact: "Bespoke high-speed Next.js web applications and customer portals engineered for sub-second speeds and maximum conversion.",
          href: "/technology-solutions/web-development",
          icon: Globe,
          accent: "text-blue-500 bg-blue-500/10 border-blue-500/20",
          stats: "<100ms API Latency"
        },
        {
          title: "Online Reputation Management (ORM)",
          tag: "Brand Shield & Reviews",
          impact: "Protect brand credibility across Google Reviews and social channels with automated positive review generation.",
          href: "/services/orm",
          icon: ShieldCheck,
          accent: "text-teal-500 bg-teal-500/10 border-teal-500/20",
          stats: "4.8+ Star Rating Shield"
        }
      ]
    },
    automation: {
      name: "Conversational AI & Automation",
      badge: "24/7 Autopilot Revenue",
      description: "Automate speed-to-lead under 60 seconds with AI voicebots, official WhatsApp CRM, and 24/7 lead qualification chatbots.",
      services: [
        {
          title: "Autonomous AI Voicebots",
          tag: "Sub-Second Conversational Voice",
          impact: "Trigger instant outbound qualification calls and handle inbound inquiries 24/7 with human-like latency and CRM auto-sync.",
          href: "/ai-solutions/ai-voicebot",
          icon: Mic,
          accent: "text-purple-500 bg-purple-500/10 border-purple-500/20",
          stats: "<60s Speed-to-Lead"
        },
        {
          title: "AI Chatbots & Lead Engines",
          tag: "Intent Scoring & Booking",
          impact: "Custom LLM chatbots trained on your business data to qualify buyer intent, answer questions, and schedule sales meetings 24/7.",
          href: "/ai-solutions/ai-chatbot",
          icon: Bot,
          accent: "text-[#2cd1a1] bg-[#2cd1a1]/10 border-[#2cd1a1]/20",
          stats: "100% Round-the-Clock"
        },
        {
          title: "AIWA WhatsApp CRM Platform",
          tag: "Meta Cloud API SaaS",
          impact: "Multi-agent WhatsApp team inbox, automated broadcast campaigns, AI customer support, and instant GST invoicing.",
          href: "https://aiwa.vmcmedia.in",
          external: true,
          icon: MessageSquare,
          accent: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
          stats: "Live Enterprise SaaS"
        }
      ]
    }
  };

  const currentTab = categories[activeTab];

  return (
    <section className="py-20 bg-background border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Interactive Tab Selectors */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          {[
            { id: "acquisition", label: "Performance Acquisition", count: "5 Solutions" },
            { id: "conversion", label: "Conversion & Brand", count: "4 Solutions" },
            { id: "automation", label: "Conversational AI & Automation", count: "3 Solutions" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`w-full sm:w-auto px-6 py-3.5 rounded-2xl text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 border ${
                activeTab === tab.id
                  ? "bg-[#073D7B] text-white border-[#073D7B] dark:bg-[#2cd1a1] dark:text-slate-950 dark:border-[#2cd1a1] shadow-lg scale-[1.02]"
                  : "bg-card text-muted-foreground border-border hover:text-foreground hover:bg-muted"
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                activeTab === tab.id
                  ? "bg-white/20 text-white dark:bg-slate-950/20 dark:text-slate-950"
                  : "bg-muted text-muted-foreground"
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Tab Header Banner */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
            {currentTab.name}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {currentTab.description}
          </p>
        </div>

        {/* Distinctive Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {currentTab.services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-card border border-slate-200 dark:border-slate-800 rounded-3xl p-7 shadow-xs hover:shadow-xl hover:border-[#2cd1a1]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${service.accent} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-muted text-foreground border border-border/80">
                      {service.stats}
                    </span>
                  </div>

                  <span className="text-[10px] font-extrabold text-[#2cd1a1] uppercase tracking-wider block mb-1">
                    {service.tag}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.impact}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60">
                  {service.external ? (
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#2cd1a1] hover:underline"
                    >
                      <span>Launch AIWA SaaS Platform</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#073D7B] dark:text-[#2cd1a1] hover:underline"
                    >
                      <span>Explore Service Playbook</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


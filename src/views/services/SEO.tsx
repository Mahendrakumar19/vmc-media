'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  faMagnifyingGlass, 
  faLink, 
  faBolt, 
  faLocationDot, 
  faFileLines, 
  faChartSimple, 
  faArrowRight, 
  faCircleCheck,
  faCrown,
  faShieldHalved
} from "@fortawesome/free-solid-svg-icons";

const SEOService = () => {
  const router = useRouter();

  const solutions = [
    {
      icon: faMagnifyingGlass,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      tag: "On-Page",
      title: "Semantic On-Page SEO",
      description: "Optimize title tags, meta descriptions, semantic HTML5 headings, entity mapping, and schema markup to align with Google Search & AI Overviews."
    },
    {
      icon: faLink,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      tag: "Authority",
      title: "High-Authority Link Building",
      description: "Acquire editorial backlinks from high-DR industry publications and authoritative news portals to build lasting domain trust without spam penalties."
    },
    {
      icon: faBolt,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      tag: "Core Web Vitals",
      title: "Technical SEO & Speed Optimization",
      description: "Resolve indexation bottlenecks, crawl budget waste, canonical conflicts, JavaScript hydration overhead, and pass Google's Core Web Vitals."
    },
    {
      icon: faLocationDot,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      tag: "Google Maps",
      title: "Local SEO & Google Business Profile",
      description: "Dominate Google Maps 3-Pack and hyper-local searches with geo-tagged citations, NAP consistency, and localized landing pages."
    },
    {
      icon: faFileLines,
      color: "text-teal-500",
      bg: "bg-teal-500/10",
      tag: "Intent Mapping",
      title: "Commercial Keyword Research",
      description: "Identify high-converting transactional search queries that your prospective buyers actually type before making purchasing decisions."
    },
    {
      icon: faChartSimple,
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      tag: "Analytics",
      title: "Algorithmic Audits & Attribution",
      description: "Transparent bi-weekly Google Search Console dashboards, keyword rank tracking, organic conversions, and revenue attribution reporting."
    }
  ];

  const packages = [
    {
      name: "Essential SEO",
      tagline: "For early-stage startups and localized service providers.",
      popular: false,
      features: [
        "Full Technical Site Health Audit",
        "Targeted Keyword Research (Up to 25 High-Intent Keywords)",
        "On-Page Optimization & Meta Entity Tags",
        "Google Business Profile Setup & Optimization",
        "XML Sitemap & Robots.txt Indexation Fixes",
        "Monthly Search Console & Traffic Report"
      ]
    },
    {
      name: "Growth Engine",
      tagline: "For scaling businesses aiming to dominate national search.",
      popular: true,
      features: [
        "Advanced On-Page & Semantic Content Strategy",
        "High-Authority Contextual Backlink Outreach",
        "Full Technical SEO & Core Web Vitals Engineering",
        "Hyper-Local SEO & Geo-Targeted Multi-City Hubs",
        "Targeted Keyword Research (Up to 75 Target Keywords)",
        "Competitor Gap Analysis & Cannibalization Fixes",
        "Bi-Weekly Strategy Calls & Custom Dashboard"
      ]
    },
    {
      name: "Enterprise Dominance",
      tagline: "For high-traffic e-commerce and multi-location corporations.",
      popular: false,
      features: [
        "Comprehensive Programmatic & Enterprise SEO",
        "Dedicated SEO Architect & Technical Lead",
        "White-Hat Digital PR & Premium Editorial Backlinks",
        "Multilingual & International Search Architecture",
        "AI Search (Google Overviews & SGE) Optimization",
        "Continuous 24/7 Rank Monitoring & Instant Anomaly Alerts",
        "Direct Slack Integration & Weekly Reporting"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Breadcrumbs 
              items={[
                { name: "Services", href: "/services" },
                { name: "Search Engine Optimization (SEO)" }
              ]} 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Data-Driven SEO Agency</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] tracking-tight">
                Rank #1 on Google for{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-[#2cd1a1] bg-clip-text text-transparent">
                  High-Intent Buyers
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Tired of vanity rankings that don&apos;t convert? VMC Media delivers technical precision, semantic content architectures, and authoritative backlinks engineered to drive measurable revenue.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => router.push('/contact')}
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <span>Request Free SEO Audit</span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </button>
              </div>

              {/* Trust badges */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-muted-foreground font-medium">
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faShieldHalved} className="w-4 h-4 text-emerald-500" />
                  100% White-Hat Google Compliance
                </span>
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-500" />
                  Guaranteed Crawl &amp; Indexation Fixes
                </span>
              </div>
            </div>
            
            <div className="relative w-full h-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
                <Image
                  src="/seo-dashboard.jpg"
                  alt="Google Search Ranking #1 and Technical SEO Analytics Dashboard"
                  width={600}
                  height={338}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-muted/20 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Engineered For ROI</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-4">
              Comprehensive Search Optimization Solutions
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We resolve technical architecture flaws, target commercial search intent, and position your brand as the undisputed authority in your niche.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, index) => (
              <div
                key={index}
                className="bg-card p-7 rounded-2xl border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <FontAwesomeIcon icon={item.icon} className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Stage Stepper Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Why Partner With VMC Media</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-6">
                SEO Built on Data &amp; Transparency, Not Guesswork
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Unlike agencies that hide behind ambiguous monthly vanity metrics, we focus exclusively on organic visibility that yields qualified consultations, sales pipeline velocity, and bottom-line profit.
              </p>
              
              <div className="space-y-3.5">
                {[
                  "Zero spam or PBN link networks — strictly white-hat editorial outreach",
                  "Deep technical audits covering JavaScript rendering, redirects & sitemaps",
                  "Entity-first schema mapping tailored for Google AI Overviews & Gemini",
                  "Dedicated senior SEO account strategist with bi-weekly updates",
                  "Custom Google Looker Studio live ranking & organic revenue dashboard"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 via-card to-secondary/5 border border-border rounded-2xl p-8 sm:p-10 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-6">Our 4-Stage Execution Roadmap</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Comprehensive Audit", desc: "Exhaustive crawl analysis, indexation errors, backlink hygiene, and competitive keyword gap mapping." },
                  { step: "02", title: "Architecture & On-Page Fixes", desc: "Restructure internal site links, optimize metadata, repair schema markups, and accelerate Core Web Vitals." },
                  { step: "03", title: "Content Engine & Authority Outreach", desc: "Publish high-converting commercial pillar pages and acquire top-tier editorial backlinks." },
                  { step: "04", title: "Attribution & Continuous Scaling", desc: "Monitor SERP fluctuations, refine ranking tactics, and expand keyword targets to protect position #1." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="text-2xl font-black text-primary/40 w-10 shrink-0">{item.step}</div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Packages */}
      <section className="py-20 bg-muted/20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Transparent Engagements</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-4">
              SEO Service Plans Engineered for Growth
            </h2>
            <p className="text-muted-foreground text-sm">
              Select the strategy plan that matches your current scale and growth trajectory.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-2xl p-8 border flex flex-col justify-between ${
                  pkg.popular ? 'border-primary shadow-2xl scale-102 ring-1 ring-primary/20' : 'border-border'
                } hover:shadow-xl transition-all duration-300`}
              >
                <div>
                  {pkg.popular && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary text-white text-[11px] font-bold rounded-full mb-4 shadow-sm">
                      <FontAwesomeIcon icon={faCrown} className="w-3 h-3 text-amber-300" />
                      <span>Most Popular</span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-foreground mb-1">{pkg.name}</h3>
                  <p className="text-xs text-muted-foreground mb-6 leading-relaxed">{pkg.tagline}</p>
                  
                  <div className="border-t border-border pt-5 space-y-3">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <FontAwesomeIcon icon={faCircleCheck} className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => router.push('/contact')}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                      pkg.popular 
                        ? 'bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20 hover:scale-102' 
                        : 'bg-muted hover:bg-muted/80 text-foreground border border-border'
                    }`}
                  >
                    Select {pkg.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Outrank Competitors on Google?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-normal">
            Get an in-depth audit uncovering your biggest keyword opportunities, technical bottlenecks, and a 90-day action plan.
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>Claim Free Strategic SEO Audit</span>
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SEOService;
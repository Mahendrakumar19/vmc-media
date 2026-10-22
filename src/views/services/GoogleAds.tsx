'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  faBullseye, 
  faArrowPointer, 
  faRotateRight, 
  faBagShopping, 
  faBolt, 
  faChartLine, 
  faArrowRight, 
  faCircleCheck,
  faCrown,
  faShieldHalved,
  faSliders
} from "@fortawesome/free-solid-svg-icons";

const GoogleAdsService = () => {
  const router = useRouter();

  const services = [
    {
      icon: faArrowPointer,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      tag: "High Intent",
      title: "Google Search Ads",
      description: "Capture high-intent prospects searching for your services with exact-match bidding, negative keyword pruning, and intent-focused ad copy."
    },
    {
      icon: faBolt,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      tag: "AI Powered",
      title: "Performance Max (PMax)",
      description: "Harness Google's automated machine learning across Search, YouTube, Gmail, Maps, and Discover with high-converting creative asset groups."
    },
    {
      icon: faBagShopping,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      tag: "E-Commerce",
      title: "Google Shopping & Merchant Feed",
      description: "Showcase physical products with live prices, ratings, and merchant promotions directly at the top of Google Shopping search results."
    },
    {
      icon: faRotateRight,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      tag: "Retargeting",
      title: "Dynamic Remarketing Campaigns",
      description: "Bring back warm visitors who browsed your website or abandoned shopping carts with hyper-targeted, sequential display and YouTube ads."
    },
    {
      icon: faChartLine,
      color: "text-teal-500",
      bg: "bg-teal-500/10",
      tag: "Tracking",
      title: "Enhanced Offline Conversion Tracking",
      description: "Connect CRM deals and closed offline revenue back into Google Ads via Server-Side GTM to teach Google's smart bidding to target higher-value buyers."
    },
    {
      icon: faSliders,
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      tag: "CRO & LP",
      title: "Landing Page Review & CRO",
      description: "Align post-click landing page message match, speed, and form friction to elevate Quality Scores and cut your Cost Per Lead (CPL) by 30-50%."
    }
  ];

  const packages = [
    {
      name: "Starter PPC",
      tagline: "For localized businesses testing paid search lead acquisition.",
      popular: false,
      features: [
        "1-2 Targeted Search Ad Campaigns",
        "Negative Keyword Exclusion List (500+ Spurious Terms)",
        "Ad Extensions & Sitelink Setup",
        "Google Analytics 4 & Conversion Tracking",
        "Bi-Weekly Budget & Bid Adjustments",
        "Monthly Looker Studio Performance Report"
      ]
    },
    {
      name: "Performance Scale",
      tagline: "For high-growth businesses scaling profitable acquisition.",
      popular: true,
      features: [
        "Search + Performance Max (PMax) Campaigns",
        "Dynamic Remarketing Across YouTube & GDN",
        "Enhanced Conversion Tracking & CRM Webhooks",
        "Continuous Ad Copy & Landing Page Split Testing",
        "Weekly Bid Strategy Refinements & Quality Score Audits",
        "Negative Placement & Click Fraud Mitigation",
        "Bi-Weekly Strategy Calls with Certified Lead"
      ]
    },
    {
      name: "Enterprise Domination",
      tagline: "For high-spend e-commerce and national multi-branch accounts.",
      popular: false,
      features: [
        "Unlimited Multi-Channel Campaigns (Search, PMax, YouTube, Shopping)",
        "Server-Side GTM & Offline Revenue Attribution",
        "Dedicated Google Partner Strategist & Copywriter",
        "Custom Script Automations for Real-Time Bid Hedging",
        "Full Landing Page Design & CRO Recommendations",
        "Daily Anomaly & Budget Pacing Monitoring",
        "Direct Slack Access & Priority Executive Support"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Breadcrumbs 
              items={[
                { name: "Services", href: "/services" },
                { name: "Google Ads & PPC Management" }
              ]} 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <FontAwesomeIcon icon={faBullseye} className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Certified Google Ads Partner</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] tracking-tight">
                Turn Google Search Clicks Into{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Predictable Revenue
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Stop hemorrhaging ad spend on broad-match waste. We architect high-converting Google Ads campaigns with ruthless keyword discipline, enhanced conversion tracking, and positive ROAS.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => router.push('/contact')}
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <span>Claim Free Account Audit</span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </button>
              </div>

              {/* Trust badges */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-muted-foreground font-medium">
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faShieldHalved} className="w-4 h-4 text-emerald-500" />
                  Click Fraud Mitigation Included
                </span>
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-500" />
                  100% Verified Server-Side Attribution
                </span>
              </div>
            </div>
            
            <div className="relative w-full h-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
                <Image
                  src="/ppc-dashboard.jpg"
                  alt="Google Ads and PPC Advertising Performance Dashboard"
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

      {/* Services Grid (Meritto-inspired clean cards) */}
      <section className="py-20 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Precision Engineering</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-4">
              High-Velocity Google Ads &amp; PPC Management
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Every campaign is engineered to lower your Cost Per Acquisition (CPA) and capture ready-to-buy prospects with laser accuracy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, index) => (
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

      {/* Why Partner Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Strategic Advantage</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-6">
                Why Top Brands Entrust Their PPC Budgets to VMC Media
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Most agencies simply set up smart bidding and let Google burn their client&apos;s budget on broad match queries. We combine active human negative keyword management with server-side conversion modeling to ensure every dollar works profitably.
              </p>
              
              <div className="space-y-3.5">
                {[
                  "Elimination of wasteful search terms and fraudulent display placements",
                  "Server-side conversion modeling (GTM + Meta CAPI / Google Offline API)",
                  "Rigorous Quality Score optimization to reduce your auction Cost-Per-Click",
                  "Continuous ad copy split-testing focusing on transactional buyer psychology",
                  "Complete transparency — you retain 100% ownership of your ad accounts and data"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 via-card to-accent/5 border border-border rounded-2xl p-8 sm:p-10 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-6">Our 4-Phase PPC Framework</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Audit & Conversion Architecture", desc: "Audit past account waste, repair tracking leaks, and implement server-side offline conversions." },
                  { step: "02", title: "Intent Campaign Structuring", desc: "Build single-theme ad groups (STAG) with negative keyword shields and high-relevance copy." },
                  { step: "03", title: "Smart Bidding Calibration", desc: "Feed clean conversion data into Google's Target CPA and Target ROAS algorithms." },
                  { step: "04", title: "Landing Page CRO & Scale", desc: "Optimize post-click conversion funnels and expand profitable keyword volume safely." }
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

      {/* Packages */}
      <section className="py-20 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Transparent Engagements</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-4">
              Google Ads Management Plans
            </h2>
            <p className="text-muted-foreground text-sm">
              Scalable management structures built around your monthly ad spend and target ROAS.
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Cut Wasted Ad Spend and Scale Inbound Leads?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-normal">
            Book a complimentary Google Ads audit. We&apos;ll analyze your search terms, Quality Scores, and conversion setup with zero obligation.
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>Claim Free PPC Audit &amp; Strategy</span>
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default GoogleAdsService;

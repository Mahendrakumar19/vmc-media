'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChartLine, 
  faArrowPointer, 
  faFlask, 
  faFire, 
  faUsers, 
  faArrowRight, 
  faCircleCheck, 
  faSliders, 
  faShieldHalved
} from "@fortawesome/free-solid-svg-icons";
import Breadcrumbs from "@/components/Breadcrumbs";

const CRO = () => {
  const router = useRouter();

  const services = [
    {
      icon: faFlask,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      tag: "Scientific",
      title: "Data-Driven A/B & Multivariate Testing",
      description: "Statistically validated split tests for landing page headlines, pricing tiers, CTA buttons, and form layouts to eliminate guesswork."
    },
    {
      icon: faArrowPointer,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      tag: "UX Audits",
      title: "Heatmap & Session Recording Audits",
      description: "Analyze Hotjar and Microsoft Clarity user recordings to uncover rage clicks, scroll drop-offs, and usability friction."
    },
    {
      icon: faSliders,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      tag: "Lead Funnels",
      title: "Checkout & Lead Form Optimization",
      description: "Streamline multi-step lead capture and checkout flows. Cut abandonment by up to 40% with smart validation and autofill."
    },
    {
      icon: faUsers,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      tag: "Copywriting",
      title: "Value Proposition & Copy Refinement",
      description: "Restructure your headlines, social proof placements, and risk-reversal guarantees to speak directly to buyer hesitation."
    },
    {
      icon: faChartLine,
      color: "text-teal-500",
      bg: "bg-teal-500/10",
      tag: "Speed = Sales",
      title: "Mobile Core Web Vitals Optimization",
      description: "Ensure mobile page loads in under 1.5 seconds. Faster mobile load speeds directly translate into higher conversion percentages."
    },
    {
      icon: faShieldHalved,
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      tag: "Attribution",
      title: "Full-Funnel Analytics & Attribution",
      description: "Configure accurate custom event tracking in GA4 and Mixpanel to measure micro-conversions at every step of your funnel."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/10 via-background to-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Breadcrumbs 
              items={[
                { name: "Services", href: "/services" },
                { name: "Conversion Rate Optimization (CRO)" }
              ]} 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
                <FontAwesomeIcon icon={faChartLine} className="w-3.5 h-3.5 text-secondary" />
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">Scientific Funnel Engineering</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] tracking-tight">
                Turn More Website Visitors Into{" "}
                <span className="bg-gradient-to-r from-secondary via-teal-500 to-accent bg-clip-text text-transparent">
                  Paying Customers
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Driving traffic without conversion optimization is burning money. We identify where your visitors drop off and re-engineer your funnels for maximum revenue per session.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => router.push('/contact')}
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <span>Request Funnel Audit</span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-muted-foreground font-medium">
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-500" />
                  Statistically Significant Test Results
                </span>
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faShieldHalved} className="w-4 h-4 text-emerald-500" />
                  Average 32% Lift in Inbound Inquiries
                </span>
              </div>
            </div>
            
            <div className="relative w-full h-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
                <Image
                  src="/CRO.webp"
                  alt="Conversion Rate Optimization and Funnel Performance Audit"
                  width={600}
                  height={400}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Meritto-inspired cards) */}
      <section className="py-20 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">Scientific Methodology</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-4">
              Comprehensive Conversion Rate Optimization
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We test user behavior hypotheses, eliminate UI friction, and turn casual site visitors into high-ticket pipeline leads.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-card p-7 rounded-2xl border border-border hover:border-secondary/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
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
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
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

      {/* 4-Step CRO Framework */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">The Economics of CRO</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-6">
                Double Your Leads Without Increasing Your Ad Budget
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                If your website converts at 1% and you improve it to 2%, you have effectively doubled your lead volume and cut your Customer Acquisition Cost (CAC) in half without spending an extra rupee on ads.
              </p>
              
              <div className="space-y-3.5">
                {[
                  "Quantitative analytics audit to find exact leak stages in your funnel",
                  "Qualitative user session recordings and scroll depth analysis",
                  "Form field friction reduction and instant autofill enhancements",
                  "High-relevance landing page copy matched to paid ad search intent",
                  "Clear, risk-reversing guarantees and strategically placed social proof"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/5 via-card to-accent/5 border border-border rounded-2xl p-8 sm:p-10 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-6">Our 4-Phase Optimization Protocol</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Diagnostic Audit & Analytics", desc: "Set up heatmaps, track click drop-offs, and map current baseline conversion rates." },
                  { step: "02", title: "Hypothesis Formulation", desc: "Develop test hypotheses based on real user behavior data and UX heuristic evaluation." },
                  { step: "03", title: "Controlled A/B Testing", desc: "Launch statistically rigorous split tests using Google Optimize / VWO to validate winner designs." },
                  { step: "04", title: "Implementation & Funnel Scale", desc: "Hardcode winning page variations and iterate continuously to protect conversion gains." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="text-2xl font-black text-secondary/40 w-10 shrink-0">{item.step}</div>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-accent">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            How Much Revenue Is Leaking From Your Funnel?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-normal">
            Request a comprehensive CRO teardown. Our conversion specialists will analyze your landing page and deliver a personalized 5-point action plan.
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>Claim Free Conversion Teardown</span>
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CRO;

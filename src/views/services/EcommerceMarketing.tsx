'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBagShopping, 
  faCartShopping, 
  faArrowRight, 
  faCircleCheck,
  faBullseye,
  faArrowTrendUp,
  faComments,
  faRotateRight,
  faShieldHalved
} from "@fortawesome/free-solid-svg-icons";
import Breadcrumbs from "@/components/Breadcrumbs";

const EcommerceMarketingService = () => {
  const router = useRouter();

  const services = [
    {
      icon: faBullseye,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      tag: "Shopping Ads",
      title: "Google Shopping & Performance Max",
      description: "Optimized product merchant feeds with real-time inventory and pricing sync, engineered to capture ready-to-buy product searchers."
    },
    {
      icon: faArrowTrendUp,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      tag: "Catalog Ads",
      title: "Meta & D2C Dynamic Catalog Ads",
      description: "Scale targeted Instagram and Facebook Advantage+ shopping campaigns to acquire new customers with profitable Return on Ad Spend (ROAS)."
    },
    {
      icon: faRotateRight,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      tag: "Cart Recovery",
      title: "Abandoned Cart Recovery Workflows",
      description: "Recover up to 28% of abandoned checkouts via automated WhatsApp triggers and targeted retargeting sequences with one-click payment links."
    },
    {
      icon: faCartShopping,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      tag: "Store SEO",
      title: "E-Commerce SEO & Category Architecture",
      description: "Rank your product collection and category pages #1 on Google with clean faceted navigation, Schema product data, and speed optimization."
    },
    {
      icon: faComments,
      color: "text-teal-500",
      bg: "bg-teal-500/10",
      tag: "Retention",
      title: "WhatsApp & Email Retention Marketing",
      description: "Drive repeat orders and compound Customer Lifetime Value (LTV) through segmented WhatsApp product recommendations and VIP loyalty drips."
    },
    {
      icon: faShieldHalved,
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      tag: "LTV Engine",
      title: "Cohort Analysis & Profit Metrics",
      description: "Full visibility into your Contribution Margin, blended CAC, repeat purchase latency, and real net profit across all digital channels."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-accent/10 via-background to-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Breadcrumbs 
              items={[
                { name: "Services", href: "/services" },
                { name: "E-commerce Marketing" }
              ]} 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                <FontAwesomeIcon icon={faBagShopping} className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-bold uppercase tracking-wider text-accent">D2C &amp; E-Commerce Growth</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] tracking-tight">
                Scale Your Online Store With{" "}
                <span className="bg-gradient-to-r from-accent via-secondary to-[#2cd1a1] bg-clip-text text-transparent">
                  High-ROAS Marketing
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                From product feed optimization to automated WhatsApp cart recovery, we help direct-to-consumer (D2C) brands acquire new shoppers and maximize repeat purchase value.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => router.push('/contact')}
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-accent to-secondary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <span>Scale Your Store Now</span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-muted-foreground font-medium">
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-500" />
                  Meta Advantage+ &amp; Google PMax Certified
                </span>
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faShieldHalved} className="w-4 h-4 text-emerald-500" />
                  Full Server-Side CAPI Tracking
                </span>
              </div>
            </div>
            
            <div className="relative w-full h-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
                <Image
                  src="/Ecommerce.webp"
                  alt="E-commerce Marketing Campaigns and D2C Store Sales Scale"
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
            <span className="text-xs font-bold uppercase tracking-wider text-accent">Revenue Engine</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-4">
              Comprehensive D2C &amp; E-Commerce Solutions
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We deploy full-funnel acquisition, automated retention workflows, and conversion rate optimization to scale your monthly GMV profitably.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-card p-7 rounded-2xl border border-border hover:border-accent/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
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
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
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

      {/* 4-Step E-Commerce Growth Framework */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent">The VMC Growth Architecture</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-6">
                Engineered for High Net Contribution Margin
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Most agencies celebrate top-line GMV while store owners lose money on rising ad costs and product returns (RTO). We optimize for blended ROAS, first-order profitability, and repeat buyer retention.
              </p>
              
              <div className="space-y-3.5">
                {[
                  "Server-side Meta Conversions API (CAPI) & Google Enhanced Conversions",
                  "Automated WhatsApp abandoned checkout recovery with zero token waste",
                  "Product feed optimization and Google Shopping Merchant Center approval",
                  "Cash On Delivery (COD) confirmation workflows to reduce Return to Origin (RTO)",
                  "Custom retention email & WhatsApp VIP customer loyalty journeys"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-accent/5 via-card to-secondary/5 border border-border rounded-2xl p-8 sm:p-10 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-6">Our 4-Stage Store Scale Blueprint</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Feed & Tracking Infrastructure", desc: "Audit product feeds, repair tracking attribution leaks, and sync server-side CAPI." },
                  { step: "02", title: "Testing Creative & Hook Angles", desc: "Deploy UGC reels, carousel angles, and product comparison graphics across Meta & Google." },
                  { step: "03", title: "Budget Scaling & Bidding Calibration", desc: "Gradually scale ad spend into verified winning ad sets while hedging CPA limits." },
                  { step: "04", title: "LTV Optimization & WhatsApp Workflows", desc: "Re-engage existing customer cohorts via WhatsApp campaigns to compound net profits." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="text-2xl font-black text-accent/40 w-10 shrink-0">{item.step}</div>
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
      <section className="py-20 bg-gradient-to-r from-accent to-secondary">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Scale Your E-Commerce Store Profitably?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-normal">
            Request an audit of your ad accounts, store conversion funnel, and retention workflows. We&apos;ll identify your biggest revenue leaks.
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>Claim Free Store Growth Audit</span>
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default EcommerceMarketingService;

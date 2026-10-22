'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  faLocationDot, 
  faStore, 
  faStar, 
  faPhone, 
  faUsers, 
  faChartLine, 
  faArrowRight, 
  faCircleCheck,
  faMapLocationDot,
  faShieldHalved
} from "@fortawesome/free-solid-svg-icons";

const LocalSEO = () => {
  const router = useRouter();

  const services = [
    {
      icon: faMapLocationDot,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      tag: "Map Pack",
      title: "Google Business Profile (GBP) Domination",
      description: "Full audit, category selection, service menu mapping, verification, and geotagged weekly updates to rank in the local 3-Pack."
    },
    {
      icon: faLocationDot,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      tag: "NAP Hygiene",
      title: "Local Citations & Directory Listings",
      description: "Build and clean up consistent Name, Address, and Phone (NAP) citations across top Indian local directories (JustDial, IndiaMART, Sulekha, YellowPages)."
    },
    {
      icon: faStar,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      tag: "Social Proof",
      title: "Review Generation & Reputation Shield",
      description: "Automate automated WhatsApp & SMS review requests to capture 5-star Google reviews from real satisfied customers while filtering negative feedback."
    },
    {
      icon: faStore,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      tag: "Multi-Location",
      title: "Multi-City Landing Page Architecture",
      description: "Engineer hyper-local city and neighborhood landing pages with localized schema markup to capture high-intent 'near me' searches."
    },
    {
      icon: faPhone,
      color: "text-teal-500",
      bg: "bg-teal-500/10",
      tag: "Direct Calls",
      title: "Click-to-Call & Local Lead Attribution",
      description: "Track phone calls, direction requests, website clicks, and WhatsApp enquiries generated directly from your Google Maps presence."
    },
    {
      icon: faChartLine,
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      tag: "Geo-Grid",
      title: "Geo-Grid Rank Tracking & Insights",
      description: "Precise mile-by-mile ranking heatmaps showing exactly where your business ranks across your city, neighborhood, and competing territories."
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
                { name: "Local SEO & Google Maps" }
              ]} 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <FontAwesomeIcon icon={faLocationDot} className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Hyper-Local SEO &amp; Google Maps</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] tracking-tight">
                Dominate Google Maps &amp; Attract{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-[#2cd1a1] bg-clip-text text-transparent">
                  Nearby Customers
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                When customers search for your services &quot;near me&quot;, do they find you or your competitors? We optimize your Google Business Profile to capture phone calls, store visits, and local buyers.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => router.push('/contact')}
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <span>Claim Free Local Audit</span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-muted-foreground font-medium">
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-500" />
                  Google 3-Pack Optimization
                </span>
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faShieldHalved} className="w-4 h-4 text-emerald-500" />
                  100% NAP Consistency Guaranteed
                </span>
              </div>
            </div>
            
            <div className="relative w-full h-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
                <Image
                  src="/Local_SEO.webp"
                  alt="VMC Media Local SEO and Google Maps 3-Pack Domination"
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
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Proven Local Playbook</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-4">
              Everything Needed to Own Local Search
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We fix inconsistent address records, optimize your Google Business Profile, generate authentic local reviews, and secure high-value map positions.
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

      {/* Local SEO Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Local Advantage</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-6">
                Why Local Visibility Generates High-Conversion Enquiries
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Over 76% of people who conduct a local search on their smartphone visit a physical business within 24 hours. We place your business front and center when prospective customers are ready to buy.
              </p>
              
              <div className="space-y-3.5">
                {[
                  "Clean up duplicate and conflicting phone or address listings",
                  "Weekly geotagged Google Business Profile photo uploads & posts",
                  "Structured LocalBusiness schema markup for instant search crawl",
                  "Automated WhatsApp workflows to collect verified customer reviews",
                  "Clear direction request & phone call lead tracking reporting"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 via-card to-accent/5 border border-border rounded-2xl p-8 sm:p-10 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-6">4-Step Local Domination Plan</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "NAP Audit & Profile Verification", desc: "Audit existing business citations and claim/verify unmanaged Google Maps locations." },
                  { step: "02", title: "Keyword & Category Alignment", desc: "Select high-converting primary & secondary Google categories and optimized service menus." },
                  { step: "03", title: "Citation Building & Clean-up", desc: "Distribute consistent business details across top national directories and geo-aggregators." },
                  { step: "04", title: "Review Velocity & Rank Defense", desc: "Deploy continuous automated review acquisition pipelines to protect position #1." }
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Capture Customers in Your City?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-normal">
            Get an instant local ranking audit showing exactly where your Google Maps profile currently ranks across your entire service radius.
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>Request Free Local Ranking Audit</span>
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default LocalSEO;

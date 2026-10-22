'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPenNib, 
  faPalette, 
  faBookOpen, 
  faArrowRight, 
  faCircleCheck,
  faLayerGroup,
  faBullseye,
  faGem,
  faShieldHalved
} from "@fortawesome/free-solid-svg-icons";
import Breadcrumbs from "@/components/Breadcrumbs";

const BrandingService = () => {
  const router = useRouter();

  const services = [
    {
      icon: faPenNib,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      tag: "Identity",
      title: "Logo & Visual Identity Design",
      description: "Distinctive, scalable logos and visual iconography crafted to convey credibility, authority, and emotional resonance across all mediums."
    },
    {
      icon: faBookOpen,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      tag: "System",
      title: "Comprehensive Brand Guidelines",
      description: "Exhaustive brand manuals defining typography hierarchies, Pantone & HEX palettes, spatial rules, and usage dos & don'ts."
    },
    {
      icon: faBullseye,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      tag: "Positioning",
      title: "Brand Strategy & Positioning",
      description: "Clarify your core value proposition, audience personas, brand archetype, voice tone, and competitive market positioning."
    },
    {
      icon: faLayerGroup,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      tag: "Pitch Ready",
      title: "Sales Decks & Collateral Design",
      description: "Investor pitch decks, commercial sales proposals, business cards, brochures, and digital stationery designed to win enterprise deals."
    },
    {
      icon: faPalette,
      color: "text-teal-500",
      bg: "bg-teal-500/10",
      tag: "Digital Assets",
      title: "Social & Digital Marketing Kit",
      description: "Cohesive social media banner kits, reel cover templates, email newsletter styling, and ad creative templates."
    },
    {
      icon: faGem,
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      tag: "Packaging",
      title: "Product Packaging & Label Design",
      description: "D2C unboxing experiences, box architecture, labels, and insert cards that turn customers into brand advocates."
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
                { name: "Content Creation & Branding" }
              ]} 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
                <FontAwesomeIcon icon={faPenNib} className="w-3.5 h-3.5 text-secondary" />
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">Creative Direction &amp; Brand Architecture</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] tracking-tight">
                Build an Unforgettable{" "}
                <span className="bg-gradient-to-r from-secondary via-teal-500 to-accent bg-clip-text text-transparent">
                  Brand Identity
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Great brands are not just recognized — they are remembered, trusted, and chosen over cheaper alternatives. We engineer strategic brand identities that command premium pricing.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => router.push('/contact')}
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <span>Start Your Brand Evolution</span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-muted-foreground font-medium">
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-500" />
                  100% Original Vector &amp; IP Rights Handover
                </span>
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faShieldHalved} className="w-4 h-4 text-emerald-500" />
                  Enterprise-Ready Design Systems
                </span>
              </div>
            </div>
            
            <div className="relative w-full h-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
                <Image
                  src="/brand.webp"
                  alt="Creative Branding, Logo Design, and Brand Identity Architecture"
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
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">Craftsmanship &amp; Strategy</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-4">
              Comprehensive Branding &amp; Creative Deliverables
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              From foundational strategy and visual design to digital marketing collateral, we build coherent brand systems that scale effortlessly.
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

      {/* 4-Phase Branding Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">Strategic Identity</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-6">
                Why Strong Branding Commands 2x-5x Higher Customer Loyalty
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Without a distinctive identity, your business is forced to compete solely on price. Consistent, premium branding builds emotional trust and transforms ordinary commodity transactions into enduring customer relationships.
              </p>
              
              <div className="space-y-3.5">
                {[
                  "In-depth stakeholder discovery sessions to understand your corporate vision",
                  "Competitive landscape analysis and white-space positioning mapping",
                  "Multiple initial creative concepts with rationalized design decisions",
                  "Complete master vector asset library (AI, EPS, SVG, PNG, PDF)",
                  "Ready-to-use typography guidelines and digital color palettes"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/5 via-card to-accent/5 border border-border rounded-2xl p-8 sm:p-10 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-6">Our 4-Phase Creative Roadmap</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Discovery & Strategy", desc: "Uncover core values, customer archetypes, and market differentiation pillars." },
                  { step: "02", title: "Concept Exploration", desc: "Design initial visual moodboards, typographic pairings, and logo symbol explorations." },
                  { step: "03", title: "Refinement & Systems", desc: "Iterate on chosen direction and build complete brand guidelines and color tokens." },
                  { step: "04", title: "Production & Delivery", desc: "Export enterprise vector asset suites, presentation decks, and digital collateral." }
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
            Ready to Build a Brand That Stands Out?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-normal">
            Book a consultation with our creative directors. Let&apos;s discuss your brand vision, target market, and design roadmap.
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>Book Creative Consultation</span>
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default BrandingService;

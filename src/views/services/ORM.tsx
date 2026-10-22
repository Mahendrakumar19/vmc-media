'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  faShieldHalved, 
  faStar, 
  faMagnifyingGlass, 
  faComments, 
  faChartLine, 
  faArrowRight, 
  faCircleCheck,
  faTriangleExclamation,
  faScaleBalanced
} from "@fortawesome/free-solid-svg-icons";

const ORM = () => {
  const router = useRouter();

  const services = [
    {
      icon: faMagnifyingGlass,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      tag: "Deep Audit",
      title: "SERP Sentiment & Brand Audit",
      description: "Comprehensive scan of Google Page 1, consumer forums (Reddit, Quora, Glassdoor), and review aggregators to map brand sentiment."
    },
    {
      icon: faScaleBalanced,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      tag: "SERP Cleanse",
      title: "Negative Search Result Suppression",
      description: "Push defaming, outdated, or misleading search results off Page 1 by establishing authoritative, high-ranking brand assets and digital PR."
    },
    {
      icon: faStar,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      tag: "5-Star Ratings",
      title: "Review Generation & Rating Elevation",
      description: "Automate post-purchase review workflows on Google, Trustpilot, and AmbitionBox to build high-volume positive social proof."
    },
    {
      icon: faTriangleExclamation,
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      tag: "Crisis Response",
      title: "Crisis Management & PR Shield",
      description: "Immediate strategic response frameworks and press releases during unexpected PR crises to neutralize misinformation and protect executive brand equity."
    },
    {
      icon: faComments,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      tag: "24/7 Radar",
      title: "Real-Time Social Listening & Alerts",
      description: "Continuous automated monitoring of unlinked brand mentions, social media threads, and consumer feedback with instant alert triggers."
    },
    {
      icon: faChartLine,
      color: "text-teal-500",
      bg: "bg-teal-500/10",
      tag: "Executive PR",
      title: "Executive & Founder Reputation",
      description: "Cultivate high-authority Wikipedia, Forbes, Crunchbase, and LinkedIn profiles for corporate leadership to build undisputed trust."
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
                { name: "Online Reputation Management (ORM)" }
              ]} 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                <FontAwesomeIcon icon={faShieldHalved} className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-bold uppercase tracking-wider text-accent">Proactive Brand Protection</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] tracking-tight">
                Defend &amp; Elevate Your{" "}
                <span className="bg-gradient-to-r from-accent via-secondary to-[#2cd1a1] bg-clip-text text-transparent">
                  Brand Reputation
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                What do potential buyers see when they Google your company name? We suppress negative search results, elevate positive customer reviews, and protect corporate brand equity.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => router.push('/contact')}
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-accent to-secondary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <span>Request Confidential Audit</span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-muted-foreground font-medium">
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-500" />
                  100% Confidential Non-Disclosure (NDA)
                </span>
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faShieldHalved} className="w-4 h-4 text-emerald-500" />
                  Ethical &amp; Legal Suppression Strategies
                </span>
              </div>
            </div>
            
            <div className="relative w-full h-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
                <Image
                  src="/Reputation.webp"
                  alt="Online Reputation Management (ORM) Strategy & Review Monitoring"
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
            <span className="text-xs font-bold uppercase tracking-wider text-accent">Comprehensive Protection</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-4">
              Online Reputation Management Solutions
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We monitor, protect, and actively shape public perception so your prospects buy with total confidence.
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

      {/* ORM Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent">Proactive Defense</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-6">
                Why A Single Negative Search Result Costs Real Deals
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Studies show that businesses risk losing over 22% of potential customers after prospects encounter just one negative search result on Google Page 1. We deploy legal, PR, and technical counter-measures to safeguard your corporate valuation.
              </p>
              
              <div className="space-y-3.5">
                {[
                  "Discreet, confidential consultations protected under strict NDA agreements",
                  "Google de-indexing requests for defamatory or copyright-infringing content",
                  "Strategic high-authority digital PR asset placement on verified publications",
                  "Automated positive review generation from real buyers and clients",
                  "Continuous 24/7 brand sentiment tracking with real-time alert triggers"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-accent/5 via-card to-secondary/5 border border-border rounded-2xl p-8 sm:p-10 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-6">Our 4-Phase Reputation Shield</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "SERP & Sentiment Reconnaissance", desc: "Scan all indexable search queries, forums, and employee review portals for harmful content." },
                  { step: "02", title: "Asset Creation & High-DR PR", desc: "Establish verified corporate profiles, medium publications, and press release syndications." },
                  { step: "03", title: "Suppression & De-Indexing", desc: "Outrank negative URLs, pushing them beyond Google Page 2 where less than 5% of users look." },
                  { step: "04", title: "Ongoing Monitoring & Defense", desc: "Maintain proactive keyword rank surveillance to insulate brand perception indefinitely." }
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
            Protect Your Business Equity Before It Impacts Revenue
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-normal">
            Request a confidential SERP reputation audit. We&apos;ll analyze Google Page 1 for your key brand terms and map out a discreet suppression plan.
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>Claim Confidential Reputation Audit</span>
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ORM;

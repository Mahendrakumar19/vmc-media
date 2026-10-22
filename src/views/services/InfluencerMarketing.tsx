'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  faUsers, 
  faBullseye, 
  faArrowRight, 
  faChartLine, 
  faHandshake, 
  faStar, 
  faShareNodes,
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons";

const InfluencerMarketingService = () => {
  const router = useRouter();

  const services = [
    { 
      icon: faBullseye, 
      color: "text-blue-500", 
      bg: "bg-blue-500/10",
      tag: "Vetted Roster",
      title: "Creator Discovery & Vetting", 
      description: "Data-driven audience audits to find verified micro and macro creators with authentic engagement and real buyer intent." 
    },
    { 
      icon: faUsers, 
      color: "text-purple-500", 
      bg: "bg-purple-500/10",
      tag: "End-to-End",
      title: "End-to-End Campaign Management", 
      description: "From rate negotiation, SOW contracts, and legal compliance to production schedules and live delivery across platforms." 
    },
    { 
      icon: faShareNodes, 
      color: "text-teal-500", 
      bg: "bg-teal-500/10",
      tag: "Viral Hooks",
      title: "Content Strategy & Co-Creation", 
      description: "Co-authoring creative hooks, reels, and video storyboards that entertain without feeling like a scripted commercial." 
    },
    { 
      icon: faHandshake, 
      color: "text-emerald-500", 
      bg: "bg-emerald-500/10",
      tag: "Retention",
      title: "Long-Term Brand Partnerships", 
      description: "Transform one-off paid collaborations into trusted brand ambassador programs that compound lifetime brand equity." 
    },
    { 
      icon: faChartLine, 
      color: "text-amber-500", 
      bg: "bg-amber-500/10",
      tag: "ROAS Focused",
      title: "Performance & Conversion Tracking", 
      description: "Track UTM link attributions, exclusive discount code redemptions, and blended customer acquisition cost (CAC)." 
    },
    { 
      icon: faStar, 
      color: "text-rose-500", 
      bg: "bg-rose-500/10",
      tag: "Whitelisted Ads",
      title: "Meta & TikTok Whitelisting", 
      description: "Amplify top-performing creator posts directly from their handles into targeted Meta Ads for up to 3x higher click-throughs." 
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/5 via-background to-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Breadcrumbs 
              items={[
                { name: "Services", href: "/services" },
                { name: "Influencer & Creator Marketing" }
              ]} 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
                <FontAwesomeIcon icon={faUsers} className="w-3.5 h-3.5 text-secondary" />
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">Influencer &amp; Creator Marketing</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] tracking-tight">
                Scale Your Brand Reach With{" "}
                <span className="bg-gradient-to-r from-secondary via-teal-500 to-accent bg-clip-text text-transparent">
                  High-Converting Creators
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Partner with verified influencers on Instagram, YouTube, and LinkedIn. We engineer authentic, ROI-driven creator campaigns that boost trust and acquire customers profitably.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => router.push('/contact')}
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <span>Book Creator Consultation</span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </button>
              </div>

              {/* Social proof bullets */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-muted-foreground font-medium">
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-500" />
                  Audience Fraud Audit Guaranteed
                </span>
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-500" />
                  Full Contract &amp; Rights Handover
                </span>
              </div>
            </div>
            
            <div className="relative w-full h-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
                <Image
                  src="/influencer_marketing.webp"
                  alt="VMC Media Influencer Marketing Campaign Management"
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

      {/* Services Grid (Meritto-inspired clean cards) */}
      <section className="py-20 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">Proven Framework</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-4">
              End-to-End Creator Campaign Execution
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Eliminate the chaos of DM outreach, unvetted vanity follower metrics, and delayed deliverables with VMC Media&apos;s rigorous agency pipeline.
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

      {/* High-Converting CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-secondary to-accent">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Partner With Influencers Who Actually Sell?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-normal">
            Get an instant creator roster mapped to your exact industry niche, target audience geography, and quarterly budget.
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>Request Brand Proposal</span>
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default InfluencerMarketingService;

'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  faShareNodes, 
  faComments, 
  faUsers, 
  faChartLine, 
  faArrowRight, 
  faCircleCheck,
  faStar,
  faBullhorn,
  faShieldHalved
} from "@fortawesome/free-solid-svg-icons";
import { 
  faFacebook, 
  faInstagram, 
  faLinkedin, 
  faXTwitter, 
  faYoutube, 
  faTiktok 
} from "@fortawesome/free-brands-svg-icons";

const SMMService = () => {
  const router = useRouter();

  const services = [
    {
      icon: faShareNodes,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      tag: "Omnichannel",
      title: "Content Creation & Visual Storytelling",
      description: "High-performing reels, carousels, infographics, and punchy copywriting designed to stop the scroll and build brand recall."
    },
    {
      icon: faBullhorn,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      tag: "Meta Ads",
      title: "Paid Social Media Advertising",
      description: "Laser-targeted campaigns on Meta (Facebook & Instagram) and LinkedIn designed to acquire leads, purchases, and positive ROAS."
    },
    {
      icon: faComments,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      tag: "24/7 DMs",
      title: "Community Management & Moderation",
      description: "Engage with your audience in real-time. Respond to DMs, moderate comments, nurture followers, and resolve customer support queries."
    },
    {
      icon: faUsers,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      tag: "Audience Growth",
      title: "Organic Follower & Viral Growth",
      description: "Strategic posting schedules, trending audio utilization, niche hashtag clusters, and collaborative content to grow genuine followers."
    },
    {
      icon: faStar,
      color: "text-teal-500",
      bg: "bg-teal-500/10",
      tag: "B2B Authority",
      title: "LinkedIn Executive Branding",
      description: "Position founders and leadership as industry thought leaders with ghostwritten articles, industry commentary, and founder storytelling."
    },
    {
      icon: faChartLine,
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      tag: "Full Tracking",
      title: "Analytics, ROI & Sentiment Audits",
      description: "Granular monthly dashboards tracking engagement rate, audience demographics, link click-throughs, and customer sentiment scores."
    }
  ];

  const platforms = [
    { icon: faInstagram, name: "Instagram Growth", color: "text-pink-500 bg-pink-500/10", desc: "Reels, stories, visual aesthetics, and influencer whitelisting." },
    { icon: faLinkedin, name: "LinkedIn B2B", color: "text-blue-600 bg-blue-600/10", desc: "Executive thought leadership, employer branding, and B2B lead generation." },
    { icon: faFacebook, name: "Meta Community", color: "text-blue-500 bg-blue-500/10", desc: "Targeted localized community groups, retargeting ads, and Meta Shops." },
    { icon: faYoutube, name: "YouTube Shorts & Video", color: "text-red-500 bg-red-500/10", desc: "Long-form authority video podcasts and viral high-reach Shorts." },
    { icon: faXTwitter, name: "X / Twitter Threads", color: "text-slate-900 dark:text-white bg-slate-900/10 dark:bg-white/10", desc: "Real-time engagement, industry announcements, and viral threads." },
    { icon: faTiktok, name: "Short-Form Video", color: "text-purple-500 bg-purple-500/10", desc: "Trend-driven short-form video strategies engineered for viral discovery." }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/10 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Breadcrumbs 
              items={[
                { name: "Services", href: "/services" },
                { name: "Social Media Marketing (SMM)" }
              ]} 
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
                <FontAwesomeIcon icon={faShareNodes} className="w-3.5 h-3.5 text-secondary" />
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">Organic &amp; Paid Social</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] tracking-tight">
                Turn Social Media Followers Into{" "}
                <span className="bg-gradient-to-r from-secondary via-teal-500 to-accent bg-clip-text text-transparent">
                  Paying Customers
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Tired of posting randomly with zero revenue impact? We engineer high-engagement creative campaigns, viral reels, and high-ROI Meta ad funnels that build lasting brand authority.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => router.push('/contact')}
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <span>Build Your Social Engine</span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-muted-foreground font-medium">
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-emerald-500" />
                  Tailored Monthly Content Calendars
                </span>
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faShieldHalved} className="w-4 h-4 text-emerald-500" />
                  Meta Certified Ad Strategists
                </span>
              </div>
            </div>
            
            <div className="relative w-full h-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
                <Image
                  src="/smm-campaign.jpg"
                  alt="Creative Social Media Marketing Campaign and Engagement Dashboard"
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

      {/* Services Grid (Meritto-inspired cards) */}
      <section className="py-20 bg-muted/20 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">Complete Social Ecosystem</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-4">
              Comprehensive Social Media Management
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We manage everything from creative concept, scriptwriting, design, and posting to community conversations and ad spend optimization.
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

      {/* Platforms Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">Multi-Platform Mastery</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-2 mb-4">
              Where We Build Your Dominance
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Every platform has its unique algorithm, audience behavior, and content consumption style. We tailor creative formats to fit each channel perfectly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((p, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-border bg-card/60 hover:border-secondary/40 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div className={`w-11 h-11 rounded-xl ${p.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <FontAwesomeIcon icon={p.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{p.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Build a High-ROI Social Media Presence?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-normal">
            Book a consultation. We&apos;ll evaluate your current engagement, identify audience growth leaks, and present a 30-day viral roadmap.
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>Request Social Strategy Call</span>
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SMMService;
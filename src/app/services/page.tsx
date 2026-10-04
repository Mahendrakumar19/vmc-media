import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import CTA from "@/components/CTA";
import ContactSection from "@/components/ContactSection";
import LocalSEOStrip from "@/components/LocalSEOStrip";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Search, Target, Share2, MapPin, BarChart3, ShoppingCart, PenTool, Globe, MessageSquare, Mic, Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing & AI Automation Services | VMC Media",
  description: "Explore VMC Media's full suite of performance digital marketing, SEO, Google Ads, Meta Funnels, Web Development, and AIWA WhatsApp Automation.",
  alternates: {
    canonical: "https://www.vmcmedia.in/services",
  },
  openGraph: {
    title: "Digital Marketing & AI Automation Services | VMC Media",
    description: "Explore VMC Media's full suite of performance digital marketing, SEO, Google Ads, Meta Funnels, Web Development, and AIWA WhatsApp Automation.",
    url: "https://www.vmcmedia.in/services",
    siteName: "VMC Media",
    type: "website",
  },
};

export default function ServicesMainPage() {
  const allServices = [
    {
      title: "Search Engine Optimization (SEO)",
      category: "Growth & Visibility",
      desc: "Rank #1 on Google with intent keyword research, technical SEO audits, high-authority backlink strategies, and local GMB pack optimization.",
      href: "/services/seo",
      icon: Search,
    },
    {
      title: "Google Ads & PPC Campaigns",
      category: "Performance Marketing",
      desc: "Maximize ROI with hyper-targeted Search, Shopping, Display, and Performance Max Google ad campaigns engineered for immediate lead generation.",
      href: "/services/google-ads",
      icon: Target,
    },
    {
      title: "Social Media Marketing (SMM)",
      category: "Performance Marketing",
      desc: "Drive brand engagement and high-converting leads through tailored Meta (Facebook/Instagram) & LinkedIn ad funnels.",
      href: "/services/smm",
      icon: Share2,
    },
    {
      title: "Local SEO & GMB Domination",
      category: "Growth & Visibility",
      desc: "Dominate local map pack rankings in your city to capture nearby customers actively searching for your services.",
      href: "/services/local-seo",
      icon: MapPin,
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      category: "Growth & Visibility",
      desc: "Transform website visitors into paying customers using data-driven A/B testing, heatmaps, and landing page UX enhancements.",
      href: "/services/cro",
      icon: BarChart3,
    },
    {
      title: "Web & SaaS Development",
      category: "Technology & Web",
      desc: "Custom high-speed Next.js websites, web applications, and headless CMS platforms built for speed, SEO, and conversions.",
      href: "/services/web-development",
      icon: Globe,
    },
    {
      title: "E-Commerce Growth Marketing",
      category: "Performance Marketing",
      desc: "Scale Shopify and WooCommerce stores with ROAS-focused shopping ads, email marketing flows, and retention automation.",
      href: "/services/ecommerce",
      icon: ShoppingCart,
    },
    {
      title: "Branding & Creative Design",
      category: "Branding & Content",
      desc: "Build a standout brand identity with logo design, visual style guides, ad creatives, and compelling copywriting.",
      href: "/services/branding",
      icon: PenTool,
    },
    {
      title: "AIWA WhatsApp CRM Platform",
      category: "AI & Automation",
      desc: "Deploy official Meta Cloud API WhatsApp automation with multi-agent inbox, multi-LLM chatbot agents, and GST invoicing.",
      href: "https://aiwa.vmcmedia.in",
      icon: MessageSquare,
      external: true,
    },
    {
      title: "Autonomous AI Voicebots",
      category: "AI & Automation",
      desc: "60-second speed-to-lead outbound calls, inbound receptionist handling, and automated lead qualification with sub-second latency.",
      href: "/ai-solutions/ai-voicebot",
      icon: Mic,
    },
    {
      title: "AI Chatbots & Lead Engines",
      category: "AI & Automation",
      desc: "Custom AI chatbots trained on your business data to qualify buyer intent and schedule appointments 24/7.",
      href: "/ai-solutions/ai-chatbot",
      icon: Bot,
    },
    {
      title: "Online Reputation Management (ORM)",
      category: "Branding & Content",
      desc: "Protect and elevate your brand image across Google Reviews, news portals, and social media channels.",
      href: "/services/orm",
      icon: CheckCircle2,
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#073D7B]/10 via-background to-background border-b border-border text-center">
        <div className="container mx-auto px-6 max-w-5xl">
          <span className="text-xs font-bold text-[#2cd1a1] uppercase tracking-wider bg-[#2cd1a1]/10 px-3 py-1 rounded-full border border-[#2cd1a1]/20">
            Performance Marketing &amp; AI Engineering
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mt-6 mb-6 leading-tight">
            Comprehensive Digital Marketing &amp; AI Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At VMC Media, we combine performance-driven marketing with cutting-edge AI customer automation to deliver predictable lead flow and revenue growth for your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, i) => {
              const IconComp = service.icon;
              return (
                <div
                  key={i}
                  className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-[#2cd1a1]/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#073D7B]/10 dark:bg-white/10 text-[#073D7B] dark:text-[#2cd1a1] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-[#2cd1a1] uppercase tracking-wider">
                      {service.category}
                    </span>
                    <h2 className="text-xl font-bold text-foreground mt-1 mb-3">
                      {service.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50">
                    {service.external ? (
                      <a
                        href={service.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2cd1a1] hover:underline"
                      >
                        <span>Launch SaaS Platform</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#073D7B] dark:text-[#2cd1a1] hover:underline"
                      >
                        <span>Explore Service Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactSection />

      {/* Local SEO Cities Links */}
      <LocalSEOStrip />

      {/* Bottom CTA */}
      <CTA />

      <Footer />
    </main>
  );
}

import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IndustriesSection from "@/components/IndustriesSection";
import CTA from "@/components/CTA";
import ContactSection from "@/components/ContactSection";
import LocalSEOStrip from "@/components/LocalSEOStrip";
import Link from "next/link";
import Image from "next/image";
import { 
  Building2, GraduationCap, Stethoscope, Landmark, 
  ShoppingCart, Factory, Car, Briefcase, ArrowRight, CheckCircle2 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industry-Specific AI Marketing & Automation Solutions | VMC Media",
  description: "Specialized performance marketing, AI WhatsApp CRM, and lead generation workflows for Real Estate, Education, Healthcare, BFSI, E-commerce, Manufacturing, and Automotive.",
  alternates: {
    canonical: "https://www.vmcmedia.in/industries",
  },
  openGraph: {
    title: "Industry-Specific AI Marketing & Automation Solutions | VMC Media",
    description: "Explore tailored growth frameworks and AI automation engineered for top industry sectors.",
    url: "https://www.vmcmedia.in/industries",
    siteName: "VMC Media",
    type: "website",
  },
};

const detailedIndustries = [
  {
    id: "real-estate",
    title: "Real Estate & Property Developers",
    icon: Building2,
    image: "/real-estate.webp",
    portfolioLink: "/portfolio/real-estate",
    headline: "High-Intent Buyer Qualification & Automated Site-Visit Scheduling",
    desc: "Real estate transactions require instant response times. We combine hyper-targeted Google & Meta ads with AI voicebots and WhatsApp chatbots to qualify budgets, send floor plans, and book site visits within 60 seconds.",
    metrics: [
      { label: "Site Visit Show-Up Rate", value: "+45%" },
      { label: "Speed-to-Lead Response", value: "< 60s" },
      { label: "Qualified Lead Cost Reduction", value: "-32%" }
    ],
    features: [
      "Targeted Google Search & Meta Lead Generation for luxury & commercial projects",
      "AI WhatsApp chatbot providing instant brochures, unit pricing & location pins",
      "Automated multi-agent lead routing to on-ground relationship managers",
      "CRM sync with automated WhatsApp site-visit reminder sequences"
    ]
  },
  {
    id: "education",
    title: "Higher Education & EdTech Consultancies",
    icon: GraduationCap,
    image: "/college.webp",
    portfolioLink: "/portfolio/college-consultancy",
    headline: "Student Admission Funnels & Multi-Counselor Lead Routing",
    desc: "Admissions cycles are time-sensitive. We engineer full-funnel digital campaigns that capture prospective students and parents, automated counseling scheduling, and direct application submission pipelines.",
    metrics: [
      { label: "Admissions Enquiries", value: "3.2x" },
      { label: "Counseling Turnaround", value: "Instant" },
      { label: "Enrollment Conversion", value: "+28%" }
    ],
    features: [
      "Omnichannel student lead capture across Google Search, Instagram & YouTube",
      "AI counsellor bot pre-qualifying eligibility criteria, courses & fee structures",
      "Automated WhatsApp application deadline reminders and webinar notifications",
      "Multi-counselor load balancing dashboard inside AIWA WhatsApp CRM"
    ]
  },
  {
    id: "healthcare",
    title: "Healthcare, Hospitals & Multi-Specialty Clinics",
    icon: Stethoscope,
    image: "/hospital.webp",
    portfolioLink: "/portfolio/hospital",
    headline: "OPD Appointment Scheduling & Automated Patient Care Support",
    desc: "Healthcare requires trust and immediate triage. We help hospitals and diagnostic clinics attract local patients with high-trust local SEO, Google Ads, and 24/7 AI appointment booking on WhatsApp.",
    metrics: [
      { label: "OPD Bookings Boost", value: "+60%" },
      { label: "No-Show Rate Reduction", value: "-40%" },
      { label: "Local Map Pack Ranking", value: "Top 3" }
    ],
    features: [
      "Hyperlocal Google Map pack (GMB) optimization and local emergency search ads",
      "WhatsApp automated doctor OPD schedules and appointment confirmations",
      "Pre-appointment test preparation guidelines and digital reports delivery",
      "Automated patient feedback and reputation shield review collection"
    ]
  },
  {
    id: "bfsi",
    title: "BFSI, Wealth Advisory & FinTech",
    icon: Landmark,
    image: "/industry-bfsi.jpg",
    headline: "High-Net-Worth Lead Qualification & Compliant Advisory Funnels",
    desc: "Financial decision-making demands security and credibility. We generate verified leads for investment, wealth management, insurance, and lending with automated income and eligibility verification.",
    metrics: [
      { label: "Verified Leads Ratio", value: "85%" },
      { label: "Client Onboarding Time", value: "-50%" },
      { label: "Cost Per Account Funded", value: "-24%" }
    ],
    features: [
      "High-intent search campaigns targeting HNIs and institutional investors",
      "Rule-based AI bot qualifying credit score ranges and investment horizons",
      "Bank-grade encrypted WhatsApp document collection and KYC checklists",
      "Automated advisory meeting booking synchronized with advisor calendars"
    ]
  },
  {
    id: "ecommerce",
    title: "Retail & E-commerce Brands",
    icon: ShoppingCart,
    image: "/Ecommerce.webp",
    portfolioLink: "/portfolio/ecommerce",
    headline: "ROAS-Driven DTC Growth, Catalog Ads & Cart Recovery",
    desc: "Scale Shopify, WooCommerce, and DTC brands with high-conversion Meta and Google Shopping campaigns coupled with automated WhatsApp checkout recovery and order tracking.",
    metrics: [
      { label: "Average ROAS", value: "4.8x" },
      { label: "Abandoned Cart Recovery", value: "+22%" },
      { label: "Repeat Purchase Rate", value: "+35%" }
    ],
    features: [
      "Performance Max Google Shopping & Meta Advantage+ dynamic catalog funnels",
      "Automated WhatsApp abandoned cart recovery notifications with one-click payment links",
      "Order status updates, dispatch tracking, and return requests over WhatsApp",
      "Retention broadcasting and VIP customer VIP offer automations"
    ]
  },
  {
    id: "manufacturing",
    title: "Industrial Manufacturing & B2B Enterprises",
    icon: Factory,
    image: "/industry-manufacturing.jpg",
    headline: "B2B Procurement RFQ Pipelines & Dealer Network Expansion",
    desc: "B2B procurement has long sales cycles and high ticket sizes. We position industrial manufacturers in front of corporate procurement heads, EPC contractors, and global buyers searching for suppliers.",
    metrics: [
      { label: "Qualified RFQ Inquiries", value: "+75%" },
      { label: "Procurement Lead Reach", value: "Pan-India / Global" },
      { label: "Dealer Enquiries", value: "2.5x" }
    ],
    features: [
      "Intent-driven B2B search ads targeting commercial buyers & specifiers",
      "Digital technical product catalogs and specification sheets on WhatsApp",
      "Automated quotation request forms and dealer territory allocation",
      "Industrial SEO dominating technical specifications and manufacturing capabilities"
    ]
  },
  {
    id: "automotive",
    title: "Automotive Dealerships & EV Brands",
    icon: Car,
    image: "/industry-automotive.jpg",
    headline: "Test Drive Lead Engines & Post-Visit Sales Nurturing",
    desc: "Turn car buyers into showroom visitors. We build localized performance campaigns for vehicle launches, exchange melas, and test-drive scheduling with instant salesperson notification.",
    metrics: [
      { label: "Test Drive Bookings", value: "+55%" },
      { label: "Showroom Walk-ins", value: "+38%" },
      { label: "Lead-to-Booking Time", value: "< 24 Hrs" }
    ],
    features: [
      "Geo-fenced mobile ads driving dealership test-drive bookings",
      "AI WhatsApp bot sharing vehicle color options, EMI calculators, and brochures",
      "Automated test-drive reminder SMS/WhatsApp to prevent missed visits",
      "Service center reminder automation for periodic vehicle maintenance"
    ]
  },
  {
    id: "professional-services",
    title: "Corporate Advisory & Professional Services",
    icon: Briefcase,
    image: "/industry-services.jpg",
    headline: "High-Ticket Client Acquisition for Law, Tax & Consulting Firms",
    desc: "Establish undisputed authority in your niche. We help legal, auditing, IT consulting, and corporate advisory firms attract enterprise retainers through thought leadership and precision targeting.",
    metrics: [
      { label: "Corporate Inquiries", value: "+40%" },
      { label: "Lead Quality Score", value: "9.2/10" },
      { label: "Pipeline Value", value: "Multi-Cr" }
    ],
    features: [
      "LinkedIn executive thought-leadership funnels & enterprise outreach",
      "High-authority SEO dominating legal, taxation, and consulting queries",
      "AI qualification bots ensuring only budget-compliant prospects reach senior partners",
      "Clean corporate whitepaper and case-study lead magnets"
    ]
  }
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#073D7B]/10 via-background to-background border-b border-border text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2cd1a1]/10 text-[#2cd1a1] text-xs font-bold uppercase tracking-wider mb-6 border border-[#2cd1a1]/20">
            <Building2 className="w-4 h-4" />
            <span>Tailored Industry Growth</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
            Digital Marketing &amp; AI Automation for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2cd1a1] to-teal-500">
              Your Industry
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Every vertical has unique buyer journeys, regulatory considerations, and sales pipelines. We deploy battle-tested marketing playbooks and custom AI workflows engineered specifically for your domain.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#industries-grid"
              className="inline-flex items-center gap-2 bg-[#2cd1a1] hover:bg-[#27b98f] text-slate-950 font-bold px-8 py-3.5 rounded-xl text-sm shadow-lg transition-all"
            >
              <span>Explore All Industries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground hover:bg-muted font-semibold px-8 py-3.5 rounded-xl text-sm transition-all"
            >
              <span>Speak to an Industry Strategist</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Grid Section */}
      <div id="industries-grid">
        <IndustriesSection />
      </div>

      {/* Deep-Dive Industry Modules */}
      <section className="py-20 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#2cd1a1] uppercase tracking-wider bg-[#2cd1a1]/10 px-3 py-1 rounded-full border border-[#2cd1a1]/20">
              Sector Playbooks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-4 mb-4">
              How We Drive Measurable ROI by Sector
            </h2>
            <p className="text-muted-foreground text-base">
              A closer look at the bespoke acquisition channels, AI automation systems, and conversion mechanics we activate for each vertical.
            </p>
          </div>

          <div className="space-y-16">
            {detailedIndustries.map((industry, index) => {
              const IconComp = industry.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={industry.id}
                  id={industry.id}
                  className="bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className={`grid lg:grid-cols-12 gap-8 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                    
                    {/* Visual & Metrics */}
                    <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-2"}`}>
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border/80 shadow-md mb-6">
                        <Image
                          src={industry.image}
                          alt={industry.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-[#2cd1a1] text-slate-950 flex items-center justify-center font-bold shadow-lg">
                              <IconComp className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-bold text-white drop-shadow-md">
                              {industry.title}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Key Performance Metrics Bar */}
                      <div className="grid grid-cols-3 gap-2 p-3 bg-muted/40 rounded-xl border border-border/60 text-center">
                        {industry.metrics.map((m, mi) => (
                          <div key={mi} className="px-1">
                            <div className="text-base sm:text-lg font-black text-[#2cd1a1]">
                              {m.value}
                            </div>
                            <div className="text-[10px] text-muted-foreground leading-tight mt-0.5">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Detailed Content */}
                    <div className={`lg:col-span-7 space-y-5 ${isEven ? "" : "lg:order-1"}`}>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#073D7B]/10 dark:bg-[#2cd1a1]/10 text-[#073D7B] dark:text-[#2cd1a1] text-xs font-bold">
                        <IconComp className="w-3.5 h-3.5" />
                        <span>{industry.title}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-snug">
                        {industry.headline}
                      </h3>

                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {industry.desc}
                      </p>

                      {/* Capabilities Checklist */}
                      <div className="space-y-2.5 pt-2">
                        {industry.features.map((feature, fi) => (
                          <div key={fi} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#2cd1a1] shrink-0 mt-1" />
                            <span className="text-xs sm:text-sm text-foreground/90 font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap gap-3 pt-3">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1.5 bg-[#2cd1a1] hover:bg-[#27b98f] text-slate-950 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-md"
                        >
                          <span>Get {industry.title.split(" ")[0]} Strategy</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        {industry.portfolioLink && (
                          <Link
                            href={industry.portfolioLink}
                            className="inline-flex items-center gap-1.5 bg-muted hover:bg-muted/80 text-foreground text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-all border border-border"
                          >
                            <span>View Case Study</span>
                          </Link>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Local SEO Cities Links */}
      <LocalSEOStrip />

      {/* Bottom CTA */}
      <CTA />

      <Footer />
    </main>
  );
}

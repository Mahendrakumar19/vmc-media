import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ServicesCatalog } from "@/components/ServicesCatalog";
import CTA from "@/components/CTA";
import ContactSection from "@/components/ContactSection";
import LocalSEOStrip from "@/components/LocalSEOStrip";

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

      {/* Interactive Tabbed Services Catalog */}
      <ServicesCatalog />

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

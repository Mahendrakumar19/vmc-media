import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import LocalSEOStrip from "@/components/LocalSEOStrip";
import CTA from "@/components/CTA";
import Link from "next/link";
import { Cpu, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software Development & Enterprise Solutions | VMC Media",
  description: "VMC Media builds bespoke software applications, ERP systems, CRM integrations, and custom business automation tools engineered for scale.",
  alternates: {
    canonical: "https://www.vmcmedia.in/services/custom-software",
  },
};

export default function CustomSoftwarePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-b from-[#073D7B]/10 via-background to-background border-b border-border text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2cd1a1]/10 text-[#2cd1a1] text-xs font-bold uppercase mb-6">
            <Cpu className="w-4 h-4" />
            <span>Enterprise Software</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Custom Software &amp; Business Automation Systems
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Tailor-made software platforms, custom CRMs, internal workflow tools, and API integrations designed to automate repetitive business operations.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#2cd1a1] hover:bg-[#27b98f] text-white font-bold px-8 py-4 rounded-xl text-base shadow-lg transition-all"
          >
            <span>Get Free Growth Assessment</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Engineered For Business Efficiency &amp; Security
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Custom CRM & ERP Platforms", desc: "Build proprietary internal management software tailored precisely to your operational workflow." },
              { title: "Third-Party API & Webhook Integrations", desc: "Connect payment gateways, WhatsApp APIs, accounting software, and external SaaS databases." },
              { title: "Data Pipeline & Analytics Dashboards", desc: "Real-time BI dashboards giving full visibility into revenue, customer behavior, and sales pipelines." },
              { title: "Legacy Software Modernization", desc: "Refactor outdated codebases into high-speed, secure cloud microservices." },
            ].map((f, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 shadow-sm flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#2cd1a1] shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <LocalSEOStrip />
      <CTA />
      <Footer />
    </main>
  );
}

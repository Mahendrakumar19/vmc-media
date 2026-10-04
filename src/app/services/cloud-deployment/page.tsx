import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import LocalSEOStrip from "@/components/LocalSEOStrip";
import CTA from "@/components/CTA";
import Link from "next/link";
import { Cloud, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud Deployment & DevOps Solutions | AWS & Vercel | VMC Media",
  description: "VMC Media delivers cloud architecture, AWS & Vercel deployments, CI/CD pipeline setup, and 24/7 server infrastructure monitoring.",
  alternates: {
    canonical: "https://www.vmcmedia.in/services/cloud-deployment",
  },
};

export default function CloudDeploymentPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-b from-[#073D7B]/10 via-background to-background border-b border-border text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2cd1a1]/10 text-[#2cd1a1] text-xs font-bold uppercase mb-6">
            <Cloud className="w-4 h-4" />
            <span>DevOps &amp; Infrastructure</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Cloud Architecture &amp; DevOps Deployment
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            High-availability AWS, Vercel, and Cloudflare deployments with automated CI/CD pipelines, SSL security, and zero-downtime scalability.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#2cd1a1] hover:bg-[#27b98f] text-white font-bold px-8 py-4 rounded-xl text-base shadow-lg transition-all"
          >
            <span>Talk to Cloud Architect</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Enterprise Cloud Management &amp; Optimization
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "AWS & Vercel Cloud Hosting", desc: "Deploy Next.js, Node.js, and Python backend microservices on global CDN networks with sub-100ms load times." },
              { title: "CI/CD Automated Deployment Pipelines", desc: "GitHub Actions and automated testing pipelines ensuring seamless production releases without downtime." },
              { title: "Database Optimization & Backups", desc: "PostgreSQL, MongoDB, and Redis caching setup with automated daily snapshots and disaster recovery." },
              { title: "Cybersecurity & SSL Compliance", desc: "WAF firewall rules, DDoS protection, rate limiting, and SSL/TLS certificate automation." },
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

import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import LocalSEOStrip from "@/components/LocalSEOStrip";
import CTA from "@/components/CTA";
import Link from "next/link";
import { Smartphone, CheckCircle2, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App Development Services | iOS & Android Apps | VMC Media",
  description: "VMC Media builds high-performance, native and cross-platform iOS & Android mobile applications integrated with AI, cloud backends, and payment gateways.",
  alternates: {
    canonical: "https://www.vmcmedia.in/services/mobile-app",
  },
};

export default function MobileAppPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-b from-[#073D7B]/10 via-background to-background border-b border-border text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2cd1a1]/10 text-[#2cd1a1] text-xs font-bold uppercase mb-6">
            <Smartphone className="w-4 h-4" />
            <span>Mobile Engineering</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Custom iOS &amp; Android Mobile App Development
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Build fast, intuitive, and scalable mobile apps designed to engage users, drive recurring revenue, and seamlessly sync with your backend APIs and AI systems.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#2cd1a1] hover:bg-[#27b98f] text-white font-bold px-8 py-4 rounded-xl text-base shadow-lg transition-all"
          >
            <span>Get Free App Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            End-to-End Mobile Application Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Native iOS & Android Development", desc: "Swift, Kotlin, and Flutter cross-platform apps built for 60fps performance and native device capabilities." },
              { title: "AI & WhatsApp CRM Integration", desc: "Integrate LLM chatbots, voice agents, and automated WhatsApp notifications directly inside your mobile app." },
              { title: "Secure Cloud Backend & APIs", desc: "Scalable REST & GraphQL microservices on AWS/Google Cloud with real-time database synchronization." },
              { title: "UI/UX Design & App Store Publishing", desc: "User-tested UI designs and full management of Apple App Store and Google Play Store compliance & release." },
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

import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import LocalSEOStrip from "@/components/LocalSEOStrip";
import CTA from "@/components/CTA";
import Link from "next/link";
import Image from "next/image";
import { 
  Smartphone, CheckCircle2, ArrowRight, ShieldCheck, Zap, 
  Bot, CreditCard, Cloud, Bell, Layers, Sparkles 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App Development Services | iOS & Android Apps | VMC Media",
  description: "VMC Media builds high-performance, native and cross-platform iOS & Android mobile applications integrated with smart AI features, cloud backends, and secure payments.",
  alternates: {
    canonical: "https://www.vmcmedia.in/services/mobile-app",
  },
};

export default function MobileAppPage() {
  const exclusiveFeatures = [
    {
      title: "AI Smart Features",
      subtitle: "Chatbot & Smart Recommendations",
      icon: Bot,
      color: "text-[#2cd1a1]",
      bg: "bg-[#2cd1a1]/10",
      border: "border-[#2cd1a1]/30",
    },
    {
      title: "One App, Both Stores",
      subtitle: "Android + iOS Together",
      icon: Layers,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
    },
    {
      title: "WhatsApp & Payments",
      subtitle: "UPI, Cards & Instant Alerts",
      icon: CreditCard,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30",
    },
    {
      title: "Admin Dashboard",
      subtitle: "Live Analytics & Full Control",
      icon: ShieldCheck,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      border: "border-amber-500/30",
    },
    {
      title: "Push Notifications",
      subtitle: "Re-engage Users Instantly",
      icon: Bell,
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      border: "border-rose-500/30",
    },
    {
      title: "Post-Launch Support",
      subtitle: "We Stay With You, Always",
      icon: Zap,
      color: "text-teal-400",
      bg: "bg-teal-400/10",
      border: "border-teal-400/30",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#073D7B]/15 via-background to-background border-b border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2cd1a1]/10 text-[#2cd1a1] text-xs font-bold uppercase tracking-wider border border-[#2cd1a1]/25">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Custom App Development</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] tracking-tight">
                Your idea. Our code. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2cd1a1] via-teal-400 to-cyan-400">
                  Your own App.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Android, iOS &amp; web apps — designed, built, and launched to grow your business, with smart AI features and automated workflows built right in.
              </p>

              {/* Badges Pill Row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
                <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                  ● Android
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold">
                  ● iOS
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold">
                  ● Web App
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#2cd1a1]/15 border border-[#2cd1a1]/40 text-[#2cd1a1] text-xs font-bold">
                  ● AI Inside
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
                  ● Secure Payments
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold">
                  ● Cloud Ready
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                <Link
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2cd1a1] hover:bg-[#27b98f] text-slate-950 font-black px-8 py-4 rounded-xl text-sm shadow-xl shadow-[#2cd1a1]/20 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Let's build your app</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-card hover:bg-muted border border-border text-foreground font-bold px-7 py-4 rounded-xl text-sm transition-all"
                >
                  <span>Book Free Scope Call</span>
                </Link>
              </div>
            </div>

            {/* Right Mockup Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-slate-950 group">
                <Image
                  src="/custom-mobile-app-showcase.jpg"
                  alt="VMC Media Custom Mobile App Development Mockup"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-mono text-[#2cd1a1] font-bold">Production Ready</span>
                    <h4 className="text-xs font-bold text-white">Full-Stack Mobile &amp; Web Architectures</h4>
                  </div>
                  <span className="text-[10px] bg-[#2cd1a1] text-slate-950 font-extrabold px-2 py-0.5 rounded-full">
                    Native 60fps
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Exclusive Features Grid (Inspired by the banner) */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#2cd1a1] uppercase tracking-wider bg-[#2cd1a1]/10 px-3 py-1 rounded-full border border-[#2cd1a1]/25">
              Exclusive Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-4 mb-3">
              Built with High-Performance Features
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Everything required to launch, scale, and monetize your digital product across Android and iOS app stores.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {exclusiveFeatures.map((feat, i) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={i}
                  className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:border-[#2cd1a1]/50 group"
                >
                  <div className={`w-12 h-12 rounded-xl ${feat.bg} border ${feat.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComp className={`w-6 h-6 ${feat.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-[#2cd1a1] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {feat.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Stack & Pipeline */}
      <section className="py-20 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            End-to-End Mobile Application Architecture
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                title: "Native iOS & Android Development", 
                desc: "Swift, Kotlin, and Flutter cross-platform apps built for 60fps performance and native device hardware capabilities." 
              },
              { 
                title: "AI & WhatsApp CRM Integration", 
                desc: "Integrate LLM chatbots, voice agents, and automated WhatsApp notifications directly inside your mobile app." 
              },
              { 
                title: "Secure Cloud Backend & APIs", 
                desc: "Scalable REST & GraphQL microservices on AWS/Google Cloud with real-time database synchronization." 
              },
              { 
                title: "UI/UX Design & App Store Publishing", 
                desc: "User-tested UI designs and full management of Apple App Store and Google Play Store compliance & release." 
              },
            ].map((f, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 shadow-sm flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#2cd1a1] shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-foreground mb-1">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
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

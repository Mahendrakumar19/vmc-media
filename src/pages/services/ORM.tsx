'use client'

import SEO from "@/components/SEO";
import Image from "next/image";
import { Shield, CheckCircle2, Star, AlertCircle, TrendingUp, ArrowRight, Search, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";

const ORM = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <SEO title="Online Reputation Management (ORM) Services - VMC Media" description="Protect and enhance your online reputation with proactive reputation management strategies." />      
      <section className="pt-32 pb-20 bg-gradient-to-b from-accent/5 to-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Online Reputation Management</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Reputation{" "}
                <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  Management
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Protect and enhance your online reputation. Monitor, manage, and improve how your brand is perceived across the internet.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => router.push('/contact')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-secondary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Protect Your Brand
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="relative w-full h-auto">
              <Image
                src="/Reputation.webp"
                alt="Reputation Management"
                width={480}
                height={320}
                priority
                loading="eager"                sizes="(max-width: 768px) 100vw, 50vw"                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              ORM Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Search, title: "Online Monitoring", description: "24/7 monitoring of brand mentions across the web." },
              { icon: Star, title: "Review Management", description: "Manage and respond to reviews across all platforms." },
              { icon: MessageSquare, title: "Social Listening", description: "Track social media conversations about your brand." },
              { icon: AlertCircle, title: "Crisis Management", description: "Quick response to negative publicity or reviews." },
              { icon: TrendingUp, title: "Reputation Repair", description: "Rebuild and restore damaged online reputation." },
              { icon: Shield, title: "Brand Protection", description: "Proactive strategies to protect your brand image." }
            ].map((item, index) => (
              <div key={index} className="bg-card p-8 rounded-2xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-accent to-secondary">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Protect Your Online Reputation
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's build and maintain a positive online presence for your brand
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-secondary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>    </div>
  );
};

export default ORM;


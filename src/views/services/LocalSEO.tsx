'use client'

import SEO from "@/components/SEO";
import Image from "next/image";
import { MapPin, CheckCircle2, Store, Star, ArrowRight, Phone, Users, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";

const LocalSEO = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <SEO title="Local SEO Services - VMC Media" description="Dominate local search results and attract nearby customers with our local SEO services." />      
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Local SEO</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Local SEO{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Dominate local search results and attract nearby customers. Get found by people searching for your services in your area with our expert local SEO strategies.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => router.push('/contact')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="relative w-full h-auto">
              <Image
                src="/Local_SEO.webp"
                alt="Local SEO"
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
              Local SEO Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Store, title: "Google Business Profile", description: "Optimize your Google Business Profile for maximum local visibility." },
              { icon: MapPin, title: "Local Citations", description: "Build citations across directories to boost local rankings." },
              { icon: Star, title: "Review Management", description: "Get more 5-star reviews and manage your online reputation." },
              { icon: Phone, title: "NAP Consistency", description: "Ensure your business info is consistent across the web." },
              { icon: Users, title: "Local Link Building", description: "Build local backlinks from relevant community websites." },
              { icon: TrendingUp, title: "Local Content", description: "Create location-specific content that ranks locally." }
            ].map((item, index) => (
              <div key={index} className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Dominate Local Search?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's get your business found by local customers
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>    </div>
  );
};

export default LocalSEO;


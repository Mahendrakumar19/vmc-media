'use client'

import SEO from "@/components/SEO";
import Image from "next/image";
import { Users, CheckCircle2, Star, Heart, TrendingUp, ArrowRight, Target, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";

const InfluencerMarketingService = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <SEO title="Influencer Marketing Services - VMC Media" description="Amplify your brand reach with strategic influencer partnerships and campaigns." />      
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
                <Users className="w-4 h-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">Influencer Marketing</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Influencer{" "}
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Marketing
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Partner with the right influencers to amplify your brand reach, build trust, and drive authentic engagement with your target audience.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => router.push('/contact')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="relative w-full h-auto">
              <Image
                src="/influencer_marketing.webp"
                alt="Influencer Marketing"
                width={480}
                height={320}
                priority
                loading="eager"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Influencer Marketing Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Influencer Discovery", description: "Find the perfect influencers for your brand and audience." },
              { icon: Users, title: "Campaign Management", description: "End-to-end management of influencer partnerships." },
              { icon: Share2, title: "Content Strategy", description: "Develop authentic content that resonates." },
              { icon: Heart, title: "Relationship Building", description: "Build long-term influencer relationships." },
              { icon: TrendingUp, title: "Performance Tracking", description: "Measure ROI and campaign effectiveness." },
              { icon: Star, title: "Brand Advocacy", description: "Turn influencers into brand ambassadors." }
            ].map((item, index) => (
              <div key={index} className="bg-card p-8 rounded-2xl border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-secondary to-accent">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner with Influencers?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's connect your brand with the right influencers
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>    </div>
  );
};

export default InfluencerMarketingService;


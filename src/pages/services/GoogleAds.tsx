'use client'

import SEO from "@/components/SEO";
import Image from "next/image";
import { Target, CheckCircle2, TrendingUp, DollarSign, Zap, ArrowRight, MousePointer, Repeat, ShoppingCart, Star, BarChart3, Award } from "lucide-react";
import { useRouter } from "next/navigation";

const GoogleAdsService = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <SEO title="Google Ads & PPC Services - VMC Media" description="Get instant visibility and high-quality leads through targeted Google Ads and PPC campaigns with expert management." />      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Google Ads & PPC</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Google Ads &{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  PPC Campaigns
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get instant visibility on Google and drive high-quality leads with expertly managed PPC campaigns that maximize ROI and minimize wasted ad spend.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => router.push('/contact')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Get Free PPC Audit
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="relative w-full h-auto">
              <Image
                src="/googleADS.webp"
                alt="Google Ads Dashboard"
                width={480}
                height={320}
                priority
                loading="eager"                sizes="(max-width: 768px) 100vw, 50vw"                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Complete PPC Management Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Full-service Google Ads management from strategy to optimization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MousePointer,
                title: "Search Ads",
                description: "Target high-intent users actively searching for your products or services on Google search results."
              },
              {
                icon: BarChart3,
                title: "Display Ads",
                description: "Eye-catching visual ads across 2+ million websites in the Google Display Network for brand awareness."
              },
              {
                icon: Repeat,
                title: "Remarketing Campaigns",
                description: "Re-engage website visitors who didn't convert with targeted ads that bring them back."
              },
              {
                icon: ShoppingCart,
                title: "Shopping Ads",
                description: "Showcase your products directly in Google search with images, prices, and merchant information."
              },
              {
                icon: TrendingUp,
                title: "Performance Max",
                description: "AI-powered campaigns across all Google channels for maximum reach and conversions."
              },
              {
                icon: Target,
                title: "Campaign Optimization",
                description: "Continuous testing, monitoring, and optimization to improve performance and lower costs."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
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

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Choose Our Google Ads Management?
              </h2>
              <div className="space-y-4">
                {[
                  "Google Ads certified specialists",
                  "Proven track record of campaign success",
                  "Data-driven optimization strategies",
                  "Transparent reporting and insights",
                  "Lower cost per acquisition (CPA)",
                  "Higher conversion rates",
                  "A/B testing and continuous improvement",
                  "Dedicated account management"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our PPC Process</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Campaign Strategy", desc: "Define goals, audience, and budget allocation" },
                  { step: "02", title: "Keyword Research", desc: "Identify high-converting keywords and negative keywords" },
                  { step: "03", title: "Ad Creation", desc: "Write compelling ad copy and design creatives" },
                  { step: "04", title: "Launch & Optimize", desc: "Monitor performance and continuously optimize for ROI" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-3xl font-bold text-primary/30">{item.step}</div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What's Included in Our Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for successful Google Ads campaigns
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Google Ads Setup", desc: "Complete account structure and campaign configuration" },
              { icon: Target, title: "Keyword Strategy", desc: "In-depth keyword research and selection" },
              { icon: DollarSign, title: "Budget Management", desc: "Smart budget allocation and bid optimization" },
              { icon: Zap, title: "Ad Copywriting", desc: "Compelling ad copy that drives clicks" },
              { icon: BarChart3, title: "Landing Page Review", desc: "Optimization recommendations for conversions" },
              { icon: TrendingUp, title: "A/B Testing", desc: "Continuous testing for better performance" },
              { icon: CheckCircle2, title: "Conversion Tracking", desc: "Accurate tracking of leads and sales" },
              { icon: Star, title: "Monthly Reports", desc: "Detailed performance analysis and insights" }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Google Ads Management Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect package for your ad spend
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                features: [
                  "1-2 Campaigns",
                  "Search Ads Only",
                  "Basic Optimization",
                  "Monthly Reporting",
                  "Conversion Tracking",
                  "Email Support"
                ]
              },
              {
                name: "Professional",
                popular: true,
                features: [
                  "Multiple Campaigns",
                  "Search + Display Ads",
                  "Advanced Optimization",
                  "Weekly Reporting",
                  "Remarketing Campaigns",
                  "A/B Testing",
                  "Landing Page Advice",
                  "Phone Support"
                ]
              },
              {
                name: "Enterprise",
                features: [
                  "Unlimited Campaigns",
                  "All Campaign Types",
                  "Premium Optimization",
                  "Daily Monitoring",
                  "Dedicated Manager",
                  "Custom Strategies",
                  "Priority Support",
                  "Quarterly Reviews"
                ]
              }
            ].map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-2xl p-8 border-2 ${
                  pkg.popular ? 'border-primary shadow-2xl scale-105' : 'border-border'
                } hover:shadow-xl transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                </div>
                
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Launch High-Converting Campaigns?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create Google Ads campaigns that drive qualified leads and maximize your ROI
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Free Campaign Strategy
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>    </div>
  );
};

export default GoogleAdsService;


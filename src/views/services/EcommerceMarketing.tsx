'use client'

import SEO from "@/components/SEO";
import Image from "next/image";
import { ShoppingCart, CheckCircle2, TrendingUp, Target, Package, ArrowRight, Star, BarChart3, Users, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

const EcommerceMarketingService = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <SEO title="E-commerce Marketing Services - VMC Media" description="Drive sales and grow your online store with comprehensive e-commerce marketing strategies." />      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-accent/5 to-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                <ShoppingCart className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">E-commerce Marketing</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                E-commerce{" "}
                <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  Marketing
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Grow your online store with data-driven e-commerce marketing strategies. From product listing optimization to cart abandonment recovery, we drive sales and maximize revenue.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => router.push('/contact')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-secondary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Grow Your Store
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="relative w-full h-auto">
              <Image
                src="/Ecommerce.webp"
                alt="E-commerce Marketing"
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
              Complete E-commerce Growth Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to scale your online store
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: "Product Listing Optimization",
                description: "Optimize product titles, descriptions, and images for better visibility and conversions."
              },
              {
                icon: Target,
                title: "Shopping Ads Management",
                description: "Google Shopping, Facebook Catalog, and dynamic product ads that drive sales."
              },
              {
                icon: BarChart3,
                title: "Revenue Optimization",
                description: "Increase average order value, customer lifetime value, and overall revenue."
              },
              {
                icon: Users,
                title: "Customer Retention",
                description: "Email marketing, loyalty programs, and retention campaigns to keep customers coming back."
              },
              {
                icon: Zap,
                title: "Cart Abandonment Recovery",
                description: "Win back lost sales with automated cart recovery emails and retargeting."
              },
              {
                icon: TrendingUp,
                title: "Marketplace Management",
                description: "Sell on Amazon, eBay, Etsy, and other marketplaces with optimized listings."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
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

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Choose Our E-commerce Marketing?
              </h2>
              <div className="space-y-4">
                {[
                  "E-commerce specialists with proven track record",
                  "Platform expertise (Shopify, WooCommerce, Magento)",
                  "Data-driven product and marketing strategies",
                  "Increase traffic, conversions, and AOV",
                  "Full-funnel marketing approach",
                  "Seamless integration with your store",
                  "ROI-focused campaigns",
                  "Transparent reporting and insights"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Process</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Store Audit", desc: "Analyze your store, products, and current marketing" },
                  { step: "02", title: "Strategy Development", desc: "Create custom growth plan for your store" },
                  { step: "03", title: "Campaign Execution", desc: "Launch ads, optimize listings, and drive traffic" },
                  { step: "04", title: "Optimize & Scale", desc: "Test, refine, and scale successful campaigns" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-3xl font-bold text-accent/30">{item.step}</div>
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

      {/* Packages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              E-commerce Marketing Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the right package for your store
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter Store",
                features: [
                  "Product Listing Optimization",
                  "Shopping Ads Setup",
                  "Basic Email Marketing",
                  "Monthly Reporting",
                  "Email Support"
                ]
              },
              {
                name: "Growth Store",
                popular: true,
                features: [
                  "Full Store Optimization",
                  "Multi-Channel Ads",
                  "Cart Abandonment Recovery",
                  "Customer Retention Campaigns",
                  "A/B Testing",
                  "Weekly Reporting",
                  "Priority Support"
                ]
              },
              {
                name: "Enterprise Store",
                features: [
                  "Custom E-commerce Strategy",
                  "Dedicated Account Manager",
                  "Advanced Analytics",
                  "Marketplace Management",
                  "Influencer Partnerships",
                  "Real-time Reporting",
                  "24/7 Support"
                ]
              }
            ].map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-2xl p-8 border-2 ${
                  pkg.popular ? 'border-accent shadow-2xl scale-105' : 'border-border'
                } hover:shadow-xl transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 bg-accent text-white text-sm font-semibold rounded-full">
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
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
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
      <section className="py-20 bg-gradient-to-r from-accent to-secondary">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Scale Your Online Store?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's grow your e-commerce business with proven marketing strategies
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Growing Today
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>    </div>
  );
};

export default EcommerceMarketingService;


'use client'

import Image from "next/image";
import { Search, CheckCircle2, TrendingUp, Target, BarChart3, ArrowRight, MapPin, FileSearch, Link, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

const SEOService = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <Search className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">SEO Services</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Search Engine{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Optimization
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Dominate search results and drive organic traffic with our data-driven SEO strategies. We help your business rank higher, attract more qualified leads, and achieve sustainable growth.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => router.push('/contact')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Get Free SEO Audit
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="relative w-full h-auto">
              <Image
                src="/SeoService.webp"
                alt="SEO Analytics"
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

      {/* What We Offer */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Comprehensive SEO Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From technical optimization to content strategy, we cover every aspect of SEO
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "On-Page SEO",
                description: "Optimize your website content, meta tags, headers, and internal linking structure for maximum visibility and relevance."
              },
              {
                icon: Link,
                title: "Off-Page SEO & Link Building",
                description: "Build high-quality backlinks and improve domain authority through strategic link building campaigns and digital PR."
              },
              {
                icon: Zap,
                title: "Technical SEO",
                description: "Ensure your website is fast, mobile-friendly, and technically optimized for search engine crawlers and indexing."
              },
              {
                icon: MapPin,
                title: "Local SEO",
                description: "Dominate local search results with Google My Business optimization and location-based strategies for maximum visibility."
              },
              {
                icon: FileSearch,
                title: "Keyword Research & Strategy",
                description: "Identify high-value keywords and search terms that drive qualified traffic to your business with comprehensive analysis."
              },
              {
                icon: BarChart3,
                title: "SEO Audits & Analytics",
                description: "Comprehensive website audits to identify issues and opportunities for improvement with detailed performance tracking."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Choose Our SEO Services?
              </h2>
              <div className="space-y-4">
                {[
                  "Proven track record of ranking improvements",
                  "Transparent reporting and analytics",
                  "White-hat SEO techniques only",
                  "Dedicated SEO specialists",
                  "Continuous optimization and monitoring",
                  "Custom strategies tailored to your business",
                  "Competitive analysis and insights",
                  "ROI-focused approach"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-foreground mb-6">SEO Process</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Audit & Analysis", desc: "Comprehensive website and competitor analysis to identify opportunities" },
                  { step: "02", title: "Strategy Development", desc: "Custom SEO roadmap based on your goals and target audience" },
                  { step: "03", title: "Implementation", desc: "Execute on-page, off-page, and technical SEO improvements" },
                  { step: "04", title: "Monitor & Optimize", desc: "Continuous tracking and strategy refinement for maximum results" }
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

      {/* SEO Packages */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              SEO Service Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Essential",
                features: [
                  "Basic On-Page SEO",
                  "Keyword Research (Up to 20 keywords)",
                  "Meta Tags Optimization",
                  "Technical SEO Audit",
                  "Monthly Reporting",
                  "Google My Business Setup"
                ]
              },
              {
                name: "Growth",
                popular: true,
                features: [
                  "Advanced On-Page SEO",
                  "Off-Page SEO & Link Building",
                  "Technical SEO Implementation",
                  "Local SEO Optimization",
                  "Keyword Research (Up to 50 keywords)",
                  "Content Strategy & Optimization",
                  "Competitor Analysis",
                  "Weekly Reporting"
                ]
              },
              {
                name: "Enterprise",
                features: [
                  "Complete On-Page SEO Management",
                  "Strategic Off-Page SEO & Link Building",
                  "Advanced Technical SEO",
                  "Comprehensive Local SEO",
                  "International SEO",
                  "Custom Content Creation",
                  "Dedicated Account Manager",
                  "Daily Monitoring & Priority Support"
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Rank Higher?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create a custom SEO strategy that drives real results for your business
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Free SEO Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SEOService;
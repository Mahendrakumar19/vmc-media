'use client'

import SEO from "@/components/SEO";
import Image from "next/image";
import { BarChart3, CheckCircle2, TrendingUp, Target, Zap, ArrowRight, Star, MousePointer, Users, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

const CRO = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <SEO title="Conversion Rate Optimization (CRO) Services - VMC Media" description="Increase conversions and maximize ROI with data-driven CRO strategies and A/B testing." />      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
                <BarChart3 className="w-4 h-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">Conversion Optimization</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Conversion Rate{" "}
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Optimization
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Turn more visitors into customers with data-driven CRO strategies. We optimize every element of your website to maximize conversions and revenue.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => router.push('/contact')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Get Free CRO Audit
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="relative w-full h-auto">
              <Image
                src="/CRO.webp"
                alt="Conversion Optimization"
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
              CRO Services That Drive Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive optimization for every touchpoint
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Analytics & Research",
                description: "Deep dive into your data to identify conversion bottlenecks and opportunities."
              },
              {
                icon: MousePointer,
                title: "A/B Testing",
                description: "Test headlines, CTAs, layouts, and content to find what converts best."
              },
              {
                icon: Target,
                title: "Landing Page Optimization",
                description: "Design and optimize landing pages for maximum conversion rates."
              },
              {
                icon: Users,
                title: "User Experience (UX)",
                description: "Improve navigation, usability, and user flow for better conversions."
              },
              {
                icon: Zap,
                title: "Speed Optimization",
                description: "Faster loading pages lead to higher conversions and better user experience."
              },
              {
                icon: ShoppingCart,
                title: "Checkout Optimization",
                description: "Reduce cart abandonment and streamline the purchase process."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
              >
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

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why CRO Matters
              </h2>
              <div className="space-y-4">
                {[
                  "Get more value from existing traffic",
                  "Lower customer acquisition costs",
                  "Increase revenue without more ad spend",
                  "Better user experience = happier customers",
                  "Data-driven decisions, not guesswork",
                  "Continuous improvement mindset",
                  "Higher profit margins",
                  "Competitive advantage in your market"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our CRO Process</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Research & Analysis", desc: "Analyze data, user behavior, and identify issues" },
                  { step: "02", title: "Hypothesis Creation", desc: "Form testable hypotheses based on insights" },
                  { step: "03", title: "Test & Experiment", desc: "Run A/B tests and multivariate experiments" },
                  { step: "04", title: "Implement & Scale", desc: "Apply winning variations and continue optimizing" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-3xl font-bold text-secondary/30">{item.step}</div>
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
              CRO Service Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the right level of optimization for your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Essential",
                features: [
                  "Monthly CRO Audit",
                  "2 A/B Tests/Month",
                  "Landing Page Analysis",
                  "Conversion Tracking Setup",
                  "Monthly Reporting",
                  "Email Support"
                ]
              },
              {
                name: "Professional",
                popular: true,
                features: [
                  "Weekly CRO Audits",
                  "6 A/B Tests/Month",
                  "Heatmap Analysis",
                  "User Session Recordings",
                  "Conversion Funnel Optimization",
                  "Bi-weekly Reporting",
                  "Priority Support"
                ]
              },
              {
                name: "Enterprise",
                features: [
                  "Continuous Optimization",
                  "Unlimited Testing",
                  "Advanced Analytics",
                  "Dedicated CRO Specialist",
                  "Full-Funnel Optimization",
                  "Real-time Reporting",
                  "24/7 Support"
                ]
              }
            ].map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-2xl p-8 border-2 ${
                  pkg.popular ? 'border-secondary shadow-2xl scale-105' : 'border-border'
                } hover:shadow-xl transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 bg-secondary text-white text-sm font-semibold rounded-full">
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
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
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
      <section className="py-20 bg-gradient-to-r from-secondary to-accent">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Increase Your Conversion Rate?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's optimize your website to turn more visitors into paying customers
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Optimizing Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>    </div>
  );
};

export default CRO;


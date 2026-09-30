'use client'

import SEO from "@/components/SEO";
import Image from "next/image";
import { PenTool, CheckCircle2, Palette, Target, TrendingUp, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const BrandingService = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <SEO title="Branding & Creative Services - VMC Media" description="Build a memorable brand identity with our comprehensive branding and creative services." />      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
                <PenTool className="w-4 h-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">Branding & Creative</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Build Your{" "}
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Brand Identity
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Create a powerful and memorable brand that resonates with your audience. From logo design to complete brand guidelines, we bring your vision to life.
              </p>
              
              <button
                onClick={() => router.push('/contact')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Start Your Brand Journey
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative w-full h-auto">
              <Image
                src="/brand.webp"
                alt="Brand Design"
                width={480}
                height={320}
                priority
                loading="eager"                sizes="(max-width: 768px) 100vw, 50vw"                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Complete Branding Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to establish and grow your brand presence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: PenTool,
                title: "Logo Design",
                description: "Unique, professional logos that capture your brand essence and make a lasting impression.",
                link: "/services/branding/logo-design"
              },
              {
                icon: Palette,
                title: "Brand Identity",
                description: "Complete brand guidelines including colors, typography, and visual style standards.",
                link: "/services/branding/brand-identity"
              },
              {
                icon: Target,
                title: "Corporate Design",
                description: "Business cards, letterheads, presentations, and all corporate collateral.",
                link: "/services/branding/corporate-design"
              },
              {
                icon: TrendingUp,
                title: "Creative Campaigns",
                description: "Eye-catching creative assets for marketing campaigns across all channels.",
                link: "/contact"
              },
              {
                icon: CheckCircle2,
                title: "Copywriting",
                description: "Compelling brand messaging and content that connects with your audience.",
                link: "/contact"
              },
              {
                icon: PenTool,
                title: "Content Marketing",
                description: "Strategic content creation that builds brand awareness and drives engagement.",
                link: "/contact"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-card p-8 rounded-2xl border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => router.push(item.link)}
              >
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="inline-flex items-center text-sm font-semibold text-secondary group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Choose Our Branding Services?
              </h2>
              <div className="space-y-4">
                {[
                  "Award-winning creative team",
                  "Unique designs tailored to your brand",
                  "Complete brand strategy and positioning",
                  "Fast turnaround times",
                  "Unlimited revisions until perfect",
                  "All file formats and ownership rights"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-foreground mb-6">Branding Process</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Discovery", desc: "Understanding your vision, values, and target audience" },
                  { step: "02", title: "Strategy", desc: "Develop brand positioning and creative direction" },
                  { step: "03", title: "Design", desc: "Create unique visual identity and brand assets" },
                  { step: "04", title: "Delivery", desc: "Final files, guidelines, and ongoing support" }
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-accent">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Brand?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create a brand identity that stands out and drives business growth
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Free Brand Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>    </div>
  );
};

export default BrandingService;


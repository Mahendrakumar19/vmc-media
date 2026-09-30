'use client'

import SEO from "@/components/SEO";
import { Globe, CheckCircle2, Code, Smartphone, Palette, Zap, ArrowRight, Star, Layout, ShoppingCart, Layers, Database, Cloud, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

const WebDevelopmentService = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <SEO title="Website Design & Development Services - VMC Media" description="Create stunning, responsive websites with custom development and modern UI/UX design that drive conversions." />      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                <Globe className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Web Design & Development</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Modern Websites That{" "}
                <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  Drive Results
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Create stunning, responsive websites with custom development, modern UI/UX design, and seamless user experiences that convert visitors into customers.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => router.push('/contact')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-secondary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop"
                alt="Website Development"
                className="rounded-2xl shadow-2xl"
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
              Complete Web Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From design to deployment, we build websites that work
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Layout,
                title: "Custom Website Design",
                description: "Unique, pixel-perfect designs tailored to your brand identity and business goals."
              },
              {
                icon: Smartphone,
                title: "Responsive Development",
                description: "Mobile-first websites that look perfect on all devices, from phones to desktops."
              },
              {
                icon: ShoppingCart,
                title: "E-Commerce Solutions",
                description: "Full-featured online stores with secure payments and inventory management."
              },
              {
                icon: Code,
                title: "Custom Web Applications",
                description: "Powerful web apps built with React, Node.js, and modern frameworks."
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                description: "Beautiful interfaces with intuitive user experiences that drive engagement."
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description: "Lightning-fast loading speeds and optimized code for better SEO and conversions."
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

      {/* Technologies */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern tech stack for powerful, scalable websites
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "React & Next.js", desc: "Modern frontend frameworks", color: "from-blue-500 to-cyan-500" },
              { name: "Node.js & Express", desc: "Backend development", color: "from-green-500 to-emerald-500" },
              { name: "Tailwind CSS", desc: "Utility-first styling", color: "from-purple-500 to-pink-500" },
              { name: "MongoDB & SQL", desc: "Database solutions", color: "from-orange-500 to-red-500" },
              { name: "TypeScript", desc: "Type-safe code", color: "from-indigo-500 to-blue-500" },
              { name: "WordPress", desc: "CMS development", color: "from-gray-600 to-gray-800" },
              { name: "Shopify & WooCommerce", desc: "E-commerce platforms", color: "from-teal-500 to-green-500" },
              { name: "AWS & Vercel", desc: "Cloud hosting", color: "from-yellow-500 to-orange-500" }
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Choose Our Web Development Services?
              </h2>
              <div className="space-y-4">
                {[
                  "Expert designers and developers",
                  "Mobile-first responsive design",
                  "SEO-optimized code structure",
                  "Lightning-fast page speeds",
                  "Secure and scalable solutions",
                  "Ongoing maintenance & support",
                  "Custom features & integrations",
                  "Transparent project management"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Development Process</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Discovery & Planning", desc: "Understand your goals, audience, and requirements" },
                  { step: "02", title: "Design & Prototype", desc: "Create wireframes and visual designs for approval" },
                  { step: "03", title: "Development & Testing", desc: "Build, test, and optimize your website" },
                  { step: "04", title: "Launch & Support", desc: "Deploy and provide ongoing maintenance" }
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

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What's Included in Every Project
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive features for modern websites
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Smartphone, title: "Responsive Design", desc: "Works on all devices" },
              { icon: Zap, title: "Fast Performance", desc: "Optimized loading speeds" },
              { icon: Lock, title: "SSL Security", desc: "Secure HTTPS encryption" },
              { icon: Cloud, title: "Cloud Hosting", desc: "Reliable infrastructure" },
              { icon: Code, title: "Clean Code", desc: "Maintainable & scalable" },
              { icon: Database, title: "Database Integration", desc: "Data management" },
              { icon: Layout, title: "CMS Integration", desc: "Easy content updates" },
              { icon: CheckCircle2, title: "Quality Assurance", desc: "Thorough testing" }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
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
              Website Development Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect solution for your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter Website",
                features: [
                  "Up to 5 Pages",
                  "Responsive Design",
                  "Basic SEO Setup",
                  "Contact Form",
                  "Social Media Integration",
                  "1 Month Support"
                ]
              },
              {
                name: "Business Website",
                popular: true,
                features: [
                  "Up to 15 Pages",
                  "Custom Design",
                  "Advanced SEO",
                  "CMS Integration",
                  "Blog Setup",
                  "Lead Generation Forms",
                  "Analytics Integration",
                  "3 Months Support"
                ]
              },
              {
                name: "E-Commerce / Custom",
                features: [
                  "Unlimited Pages",
                  "Custom Development",
                  "E-Commerce Features",
                  "Payment Gateway",
                  "Custom Integrations",
                  "Admin Dashboard",
                  "Training Included",
                  "6 Months Support"
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
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create a stunning website that showcases your brand and drives business growth
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Your Project Today
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>    </div>
  );
};

export default WebDevelopmentService;


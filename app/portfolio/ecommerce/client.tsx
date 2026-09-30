'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import { CheckCircle2, ShoppingCart, TrendingUp, Zap, Users } from 'lucide-react'

export function EcommercePortfolioClient() {
  const projects = [
    {
      id: 1,
      name: "Fashion E-commerce Store",
      description: "Multi-brand fashion platform with AI-driven recommendations and seasonal campaigns",
      results: "₹2.5 Cr annual revenue, 45% increase in repeat customers",
      image: "/Fashion_E_Commerce.webp"
    },
    {
      id: 2,
      name: "Electronics Marketplace - PAN India",
      description: "Large electronics store with competitive pricing, live inventory, and fast delivery",
      results: "₹4.2 Cr quarterly sales, 3.2x ROAS on ad spend",
      image: "/electronics_pan_india.webp"
    },
    {
      id: 3,
      name: "Organic & Wellness Products",
      description: "Niche e-commerce platform for organic and wellness products with subscription model",
      results: "₹85 Lakhs MRR, 60% subscription retention rate",
      image: "/organic_wellness_product.webp"
    },
    {
      id: 4,
      name: "Beauty & Cosmetics Store",
      description: "Beauty platform with influencer partnerships and user-generated content strategy",
      results: "₹1.8 Cr annual GMV, 250K active customers",
      image: "/Beauty_cosmetics.webp"
    }
  ]

  const benefits = [
    { icon: ShoppingCart, title: "Sales Growth", description: "Increase average order value and conversion rates significantly" },
    { icon: TrendingUp, title: "Traffic Increase", description: "Drive qualified traffic from organic and paid channels" },
    { icon: Users, title: "Customer Retention", description: "Build loyal customer base with retention marketing strategies" },
    { icon: Zap, title: "Performance Optimization", description: "Optimize site speed, checkout flow, and user experience" }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <section className="pt-32 pb-2 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                E-commerce Portfolio
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Successful online store growth and sales optimization across multiple categories
              </p>
            </div>
          </div>
        </section>

        <section className="pt-2 pb-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Featured E-commerce Success Stories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all">
                  <div className="h-72 bg-muted overflow-hidden relative">
                    <Image 
                      src={project.image} 
                      alt={project.name} 
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      quality={85}
                      className="object-cover" 
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-bold text-foreground mb-3">{project.name}</h3>
                    <p className="text-muted-foreground mb-5 leading-relaxed">{project.description}</p>
                    <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <p className="text-sm font-semibold text-primary">{project.results}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Why Choose Our E-commerce Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg transition-all text-center">
                  <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Our E-commerce Strategy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Store Optimization", desc: "Improve product pages, navigation, and checkout experience" },
                { step: "02", title: "Traffic Generation", desc: "Drive qualified buyers through multiple marketing channels" },
                { step: "03", title: "Revenue Maximization", desc: "Increase AOV, reduce cart abandonment, and boost conversions" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

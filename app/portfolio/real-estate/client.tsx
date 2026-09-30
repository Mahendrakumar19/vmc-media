'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import { CheckCircle2, Home, MapPin, TrendingUp, Users } from 'lucide-react'

export function RealEstatePortfolioClient() {
  const projects = [
    {
      id: 1,
      name: "Luxury Apartment Complex - Delhi",
      description: "Marketed a premium 200-unit residential complex with SEO, digital ads, and virtual tours",
      results: "450 inquiries in 3 months, 85 units sold",
      image: "/Delhi.webp"
    },
    {
      id: 2,
      name: "Commercial Real Estate - Bangalore",
      description: "Promoted office spaces and retail units across 5 locations with targeted campaigns",
      results: "1200 leads, 35 leases signed",
      image: "/Bangalore.webp"
    },
    {
      id: 3,
      name: "Residential Villas - Mumbai",
      description: "High-end villa community marketing with property showcase and buyer targeting",
      results: "280 qualified leads, 42 sales",
      image: "/Mumbai.webp"
    },
    {
      id: 4,
      name: "Budget Housing Project - Pune",
      description: "Mass market housing project with social media and local SEO optimization",
      results: "2100 inquiries, 380 bookings",
      image: "/Pune.webp"
    }
  ]

  const benefits = [
    { icon: TrendingUp, title: "Increased Visibility", description: "300% increase in property inquiries through digital marketing" },
    { icon: Users, title: "Targeted Buyers", description: "Reach qualified buyers through precise audience targeting" },
    { icon: Home, title: "Faster Sales", description: "Reduce time-to-sale by 40% with strategic marketing" },
    { icon: MapPin, title: "Local SEO", description: "Dominate local searches for real estate in your area" }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <section className="pt-32 pb-2 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Real Estate Portfolio
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Successful real estate marketing campaigns with proven results across residential, commercial, and luxury segments
              </p>
            </div>
          </div>
        </section>

        <section className="pt-2 pb-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Featured Real Estate Projects</h2>
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
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Why Choose Our Real Estate Marketing</h2>
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
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Our Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Market Analysis", desc: "Deep dive into your property market and competition analysis" },
                { step: "02", title: "Strategic Marketing", desc: "Custom digital campaigns targeting qualified buyers" },
                { step: "03", title: "Lead Generation", desc: "Continuous optimization for maximum conversions" }
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

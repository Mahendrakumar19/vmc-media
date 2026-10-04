'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import { CheckCircle2, Users, Stethoscope, TrendingUp, Clock } from 'lucide-react'

export function HospitalPortfolioClient() {
  const projects = [
    {
      id: 1,
      name: "Multi-Specialty Hospital - Delhi",
      description: "Comprehensive healthcare marketing for 500+ bed hospital with focus on specialized departments",
      results: "8500 patient inquiries, 40% increase in OPD consultations",
      image: "/hospital_Delhi.webp"
    },
    {
      id: 2,
      name: "Cardiac Care Center - Mumbai",
      description: "Specialized cardiac services marketing targeting high-risk patients and referrals",
      results: "320 cardiac procedures scheduled, 85% patient satisfaction",
      image: "/hospital_mumbai.webp"
    },
    {
      id: 3,
      name: "Diagnostic Center Chain - Pan India",
      description: "Multi-city diagnostic center promotion with online appointment booking system",
      results: "12000 online bookings, 150% revenue increase",
      image: "/pan_india_daignostic.webp"
    },
    {
      id: 4,
      name: "Orthopedic & Joint Center - Bangalore",
      description: "Specialized orthopedic services marketing for joint replacement and sports medicine",
      results: "1850 patient registrations, 65 surgeries booked",
      image: "/orthopedic_bangalore.webp"
    }
  ]

  const benefits = [
    { icon: Users, title: "Patient Acquisition", description: "Attract more patients through targeted healthcare marketing" },
    { icon: TrendingUp, title: "Revenue Growth", description: "Increase OPD visits and specialized service utilization" },
    { icon: Clock, title: "24/7 Availability", description: "Online appointment booking and emergency service promotion" },
    { icon: Stethoscope, title: "Doctor Visibility", description: "Showcase specialist doctors and build trust with patients" }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <section className="pt-32 pb-2 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-7">
                Hospital & Healthcare Portfolio
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Proven healthcare marketing strategies to increase patient engagement and hospital revenue
              </p>
            </div>
          </div>
        </section>

        <section className="pt-2 pb-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Featured Hospital & Healthcare Projects</h2>
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
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Why Choose Our Healthcare Marketing</h2>
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
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Our Healthcare Marketing Strategy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Service Promotion", desc: "Highlight specialized services and department expertise" },
                { step: "02", title: "Patient Acquisition", desc: "Multi-channel campaigns to attract new patients" },
                { step: "03", title: "Retention & Growth", desc: "Build patient loyalty and increase service utilization" }
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

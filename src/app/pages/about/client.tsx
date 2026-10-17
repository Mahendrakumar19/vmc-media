'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export function AboutPageClient() {
  const AboutComponent = require('@/views/info/About').default
  return (
    <div className="min-h-screen">
      <Header />
      <AboutComponent />
      <Footer />
    </div>
  )
}

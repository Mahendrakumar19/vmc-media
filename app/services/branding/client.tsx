'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export function BrandingPageClient() {
  const BrandingComponent = require('@/pages/services/Branding').default
  return (
    <div className="min-h-screen">
      <Header />
      <BrandingComponent />
      <Footer />
    </div>
  )
}

'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export function GoogleAdsPageClient() {
  const GoogleAdsComponent = require('@/views/services/GoogleAds').default
  return (
    <div className="min-h-screen">
      <Header />
      <GoogleAdsComponent />
      <Footer />
    </div>
  )
}

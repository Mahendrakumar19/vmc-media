'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export function EcommercePageClient() {
  const EcommerceComponent = require('@/views/services/EcommerceMarketing').default
  return (
    <div className="min-h-screen">
      <Header />
      <EcommerceComponent />
      <Footer />
    </div>
  )
}

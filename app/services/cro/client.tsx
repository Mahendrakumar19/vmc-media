'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export function CROPageClient() {
  const CROComponent = require('@/pages/services/CRO').default
  return (
    <div className="min-h-screen">
      <Header />
      <CROComponent />
      <Footer />
    </div>
  )
}

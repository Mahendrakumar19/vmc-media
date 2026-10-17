'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export function CROPageClient() {
  const CROComponent = require('@/views/services/CRO').default
  return (
    <div className="min-h-screen">
      <Header />
      <CROComponent />
      <Footer />
    </div>
  )
}

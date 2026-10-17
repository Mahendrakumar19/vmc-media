'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export function SMMPageClient() {
  const SMMComponent = require('@/views/services/SMM').default
  return (
    <div className="min-h-screen">
      <Header />
      <SMMComponent />
      <Footer />
    </div>
  )
}

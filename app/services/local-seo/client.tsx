'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export function LocalSEOPageClient() {
  const LocalSEOComponent = require('@/pages/services/LocalSEO').default
  return (
    <div className="min-h-screen">
      <Header />
      <LocalSEOComponent />
      <Footer />
    </div>
  )
}

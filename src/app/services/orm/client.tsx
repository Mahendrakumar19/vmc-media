'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export function ORMPageClient() {
  const ORMComponent = require('@/views/services/ORM').default
  return (
    <div className="min-h-screen">
      <Header />
      <ORMComponent />
      <Footer />
    </div>
  )
}

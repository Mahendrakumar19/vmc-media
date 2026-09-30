'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export function ContactPageClient() {
  const ContactComponent = require('@/pages/Contact').default
  return (
    <div className="min-h-screen">
      <Header />
      <ContactComponent />
      <Footer />
    </div>
  )
}

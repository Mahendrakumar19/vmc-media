'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WebDevComponent from "@/components/services/WebDevelopment"

export function WebDevPageClient() {
  return (
    <div className="min-h-screen">
      <Header />
      <WebDevComponent />
      <Footer />
    </div>
  )
}

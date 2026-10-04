'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export function PrivacyPageClient() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: December 4, 2025</p>
            
            <h2>1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including when you create an account, fill out a form, request information, or communicate with us.</p>
            
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

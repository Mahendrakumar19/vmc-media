'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export function TermsPageClient() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>Terms content here</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

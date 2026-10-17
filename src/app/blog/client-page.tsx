'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export function BlogPageClient() {
  const BlogComponent = require('@/views/Blog').default
  return (
    <div className="min-h-screen">
      <Header />
      <BlogComponent />
      <Footer />
    </div>
  )
}

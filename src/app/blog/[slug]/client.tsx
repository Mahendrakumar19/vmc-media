'use client'

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { notFound } from "next/navigation"

const posts: Record<string, { title: string; excerpt: string }> = {
  "ai-powered-seo": {
    title: "AI-Powered SEO: What Actually Works",
    excerpt:
      "How AI tools can improve keyword research, content optimization, and technical SEO without the hype.",
  },
  "ai-digital-marketing-2025": {
    title: "AI in Digital Marketing for 2025",
    excerpt:
      "Trends that matter this year: automation, personalization at scale, and performance measurement.",
  },
  "ai-content-optimization-seo": {
    title: "AI Content Optimization for SEO",
    excerpt:
      "A practical framework for using AI to plan, draft, and optimize content that ranks.",
  },
}

export function BlogDetailClient({ slug }: { slug: string }) {
  const post = posts[slug]
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-3xl flex-1">
        <article>
          <h1 className="text-3xl font-bold tracking-tight mb-4">{post.title}</h1>
          <p className="text-muted-foreground mb-8">{post.excerpt}</p>
          <div className="prose prose-zinc dark:prose-invert">
            <p>
              This is a placeholder detail page for <strong>{slug}</strong>. Replace this
              content with your blog rendering logic (MDX, CMS fetch, etc.).
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

import { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogDetailClient } from "./client"

const blogSlugs = [
  "ai-powered-seo",
  "ai-digital-marketing-2025",
  "ai-content-optimization-seo",
]

export async function generateStaticParams() {
  return blogSlugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const posts: Record<string, { title: string; excerpt: string }> = {
    "ai-powered-seo": {
      title: "AI-Powered SEO: What Actually Works",
      excerpt: "How AI tools can improve keyword research, content optimization, and technical SEO without the hype.",
    },
    "ai-digital-marketing-2025": {
      title: "AI in Digital Marketing for 2025",
      excerpt: "Trends that matter this year: automation, personalization at scale, and performance measurement.",
    },
    "ai-content-optimization-seo": {
      title: "AI Content Optimization for SEO",
      excerpt: "A practical framework for using AI to plan, draft, and optimize content that ranks.",
    },
  }

  const post = posts[params.slug]
  if (!post) {
    return {}
  }

  return {
    title: `${post.title} | VMC Media Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://vmcmedia.com/blog/${params.slug}`,
    },
  }
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const validSlugs = blogSlugs
  if (!validSlugs.includes(params.slug)) {
    notFound()
  }

  return <BlogDetailClient slug={params.slug} />
}

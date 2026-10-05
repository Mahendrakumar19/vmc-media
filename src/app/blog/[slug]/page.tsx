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

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
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

  const post = posts[slug]
  if (!post) {
    return {}
  }

  return {
    title: `${post.title} | VMC Media Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.vmcmedia.in/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | VMC Media`,
      description: post.excerpt,
      url: `https://www.vmcmedia.in/blog/${slug}`,
      siteName: 'VMC Media',
      type: 'article',
    },
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params
  const validSlugs = blogSlugs
  if (!validSlugs.includes(slug)) {
    notFound()
  }

  return <BlogDetailClient slug={slug} />
}

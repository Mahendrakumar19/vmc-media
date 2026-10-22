import { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogDetailClient } from "./client"
import { generateArticleJsonLd, generateBreadcrumbJsonLd } from "@/lib/seoSchema"

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

const posts: Record<string, { title: string; excerpt: string; date: string }> = {
  "ai-powered-seo": {
    title: "AI-Powered SEO: What Actually Works",
    excerpt: "How AI tools can improve keyword research, content optimization, and technical SEO without the hype.",
    date: "2026-03-15",
  },
  "ai-digital-marketing-2025": {
    title: "AI in Digital Marketing for 2025",
    excerpt: "Trends that matter this year: automation, personalization at scale, and performance measurement.",
    date: "2026-02-10",
  },
  "ai-content-optimization-seo": {
    title: "AI Content Optimization for SEO",
    excerpt: "A practical framework for using AI to plan, draft, and optimize content that ranks.",
    date: "2026-01-20",
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
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
      publishedTime: post.date,
      images: [
        {
          url: 'https://www.vmcmedia.in/about-vmc-agency.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | VMC Media`,
      description: post.excerpt,
      images: ['https://www.vmcmedia.in/about-vmc-agency.png'],
    },
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params
  const post = posts[slug]
  if (!post) {
    notFound()
  }

  const articleJsonLd = generateArticleJsonLd({
    title: post.title,
    description: post.excerpt,
    url: `https://www.vmcmedia.in/blog/${slug}`,
    datePublished: `${post.date}T09:00:00+05:30`,
    dateModified: `${post.date}T12:00:00+05:30`,
  })

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.vmcmedia.in" },
    { name: "Blog", url: "https://www.vmcmedia.in/blog" },
    { name: post.title, url: `https://www.vmcmedia.in/blog/${slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogDetailClient slug={slug} />
    </>
  )
}

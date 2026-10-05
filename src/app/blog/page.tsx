import type { Metadata } from "next"
import { BlogPageClient } from "./client-page"

export const metadata: Metadata = {
  title: "Insights & Strategy Blog | VMC Media",
  description: "Actionable playbooks on AI SEO, Google algorithm updates, WhatsApp revenue automation, and modern performance marketing.",
  alternates: {
    canonical: "https://www.vmcmedia.in/blog",
  },
  openGraph: {
    title: "Insights & Strategy Blog | VMC Media",
    description: "Actionable playbooks on AI SEO, Google algorithm updates, WhatsApp revenue automation, and modern performance marketing.",
    url: "https://www.vmcmedia.in/blog",
    siteName: "VMC Media",
    type: "website",
  },
}

export default function BlogPage() {
  return <BlogPageClient />
}


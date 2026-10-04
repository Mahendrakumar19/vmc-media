import { Metadata } from "next"
import { SEOPageClient } from "./client"

export const metadata: Metadata = {
  title: "Professional SEO Services | Search Engine Optimization | VMC Media",
  description: "Rank #1 on Google with VMC Media's data-driven SEO services. Technical audits, intent keyword research, link building & local SEO domination.",
  alternates: {
    canonical: "https://www.vmcmedia.in/services/seo",
  },
}

export default function SEOPage() {
  return <SEOPageClient />
}



import { Metadata } from "next"
import { LocalSEOPageClient } from "./client"

export const metadata: Metadata = {
  title: "Local SEO & Google Business Profile Optimization | VMC Media",
  description: "Dominate local search rankings and Google Maps 3-Pack. Capture high-intent nearby buyers actively searching for your services.",
  alternates: {
    canonical: "https://www.vmcmedia.in/services/local-seo",
  },
}

export default function LocalSEOPage() {
  return <LocalSEOPageClient />
}



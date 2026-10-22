import { Metadata } from "next"
import { SEOPageClient } from "./client"
import { generateServiceJsonLd, generateBreadcrumbJsonLd } from "@/lib/seoSchema"

export const metadata: Metadata = {
  title: "Professional SEO Services in India | Search Engine Optimization | VMC Media",
  description: "Rank #1 on Google with VMC Media's data-driven SEO services. Technical audits, high-intent keyword research, authority link building & local SEO domination.",
  alternates: {
    canonical: "https://www.vmcmedia.in/services/seo",
  },
  openGraph: {
    title: "Professional SEO Services in India | VMC Media",
    description: "Rank #1 on Google with VMC Media's data-driven SEO services. Technical audits, high-intent keyword research, authority link building & local SEO domination.",
    url: "https://www.vmcmedia.in/services/seo",
    siteName: "VMC Media",
    type: "website",
    images: [
      {
        url: "https://www.vmcmedia.in/about-vmc-agency.png",
        width: 1200,
        height: 630,
        alt: "VMC Media SEO Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional SEO Services in India | VMC Media",
    description: "Rank #1 on Google with VMC Media's data-driven SEO services.",
    images: ["https://www.vmcmedia.in/about-vmc-agency.png"],
  },
}

export default function SEOPage() {
  const serviceJsonLd = generateServiceJsonLd({
    name: "Search Engine Optimization (SEO) Services",
    description: "Comprehensive SEO services including on-page optimization, technical SEO audits, high-intent keyword mapping, and authority backlink growth.",
    serviceType: "Digital Marketing & SEO",
    url: "https://www.vmcmedia.in/services/seo",
  })

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.vmcmedia.in" },
    { name: "Services", url: "https://www.vmcmedia.in/services" },
    { name: "Search Engine Optimization", url: "https://www.vmcmedia.in/services/seo" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SEOPageClient />
    </>
  )
}



import { Metadata } from "next"
import { InfluencerMarketingPageClient } from "./client"
import { generateServiceJsonLd, generateBreadcrumbJsonLd } from "@/lib/seoSchema"

export const metadata: Metadata = {
  title: "Influencer Marketing & Creator Outreach Services in India | VMC Media",
  description: "Connect your brand with top verified creators and influencers across Instagram, YouTube, and LinkedIn. Strategic creator marketing, whitelisted campaigns & guaranteed ROI.",
  alternates: {
    canonical: "https://www.vmcmedia.in/services/influencer-marketing",
  },
  openGraph: {
    title: "Influencer Marketing & Creator Outreach Services | VMC Media",
    description: "Connect your brand with top verified creators and influencers across Instagram, YouTube, and LinkedIn.",
    url: "https://www.vmcmedia.in/services/influencer-marketing",
    siteName: "VMC Media",
    type: "website",
    images: [
      {
        url: "https://www.vmcmedia.in/about-vmc-agency.png",
        width: 1200,
        height: 630,
        alt: "VMC Media Influencer Marketing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Marketing Services | VMC Media",
    description: "Connect your brand with top verified creators and drive viral audience engagement.",
    images: ["https://www.vmcmedia.in/about-vmc-agency.png"],
  },
}

export default function InfluencerMarketingPage() {
  const serviceJsonLd = generateServiceJsonLd({
    name: "Influencer Marketing & Creator Outreach Services",
    description: "End-to-end influencer marketing campaigns, talent discovery, authentic creator partnerships, and performance tracking.",
    serviceType: "Influencer Marketing & Social Media",
    url: "https://www.vmcmedia.in/services/influencer-marketing",
  })

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.vmcmedia.in" },
    { name: "Services", url: "https://www.vmcmedia.in/services" },
    { name: "Influencer Marketing", url: "https://www.vmcmedia.in/services/influencer-marketing" },
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
      <InfluencerMarketingPageClient />
    </>
  )
}



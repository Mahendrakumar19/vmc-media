import { Metadata } from "next"
import { GoogleAdsPageClient } from "./client"
import { generateServiceJsonLd, generateBreadcrumbJsonLd } from "@/lib/seoSchema"

export const metadata: Metadata = {
  title: "Google Ads & PPC Campaign Management Services | VMC Media",
  description: "High-ROI Google Ads management in India. Search Ads, Shopping campaigns, YouTube Ads, and Performance Max engineered for immediate lead generation and positive ROAS.",
  alternates: {
    canonical: "https://www.vmcmedia.in/services/google-ads",
  },
  openGraph: {
    title: "Google Ads & PPC Campaign Management | VMC Media",
    description: "High-ROI Google Ads management. Search Ads, Performance Max, and conversion-optimized campaigns.",
    url: "https://www.vmcmedia.in/services/google-ads",
    siteName: "VMC Media",
    type: "website",
    images: [
      {
        url: "https://www.vmcmedia.in/about-vmc-agency.png",
        width: 1200,
        height: 630,
        alt: "VMC Media Google Ads & PPC Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads & PPC Management | VMC Media",
    description: "High-ROI Google Ads management engineered for instant qualified lead generation.",
    images: ["https://www.vmcmedia.in/about-vmc-agency.png"],
  },
}

export default function GoogleAdsPage() {
  const serviceJsonLd = generateServiceJsonLd({
    name: "Google Ads & Pay-Per-Click (PPC) Management",
    description: "Certified Google Partner agency managing Search, Display, Shopping, YouTube, and Performance Max ad campaigns with conversion tracking.",
    serviceType: "Paid Advertising & PPC",
    url: "https://www.vmcmedia.in/services/google-ads",
  })

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://www.vmcmedia.in" },
    { name: "Services", url: "https://www.vmcmedia.in/services" },
    { name: "Google Ads & PPC", url: "https://www.vmcmedia.in/services/google-ads" },
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
      <GoogleAdsPageClient />
    </>
  )
}



import { Metadata } from "next"
import { GoogleAdsPageClient } from "./client"

export const metadata: Metadata = {
  title: "Google Ads & PPC Campaign Management Services | VMC Media",
  description: "High-ROI Google Ads management. Target search buyers, Shopping campaigns, and Performance Max ads engineered for immediate lead generation.",
  alternates: {
    canonical: "https://www.vmcmedia.in/services/google-ads",
  },
}

export default function GoogleAdsPage() {
  return <GoogleAdsPageClient />
}



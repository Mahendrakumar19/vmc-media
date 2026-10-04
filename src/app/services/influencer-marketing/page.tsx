import { Metadata } from "next"
import { InfluencerMarketingPageClient } from "./client"

export const metadata: Metadata = {
  title: "Influencer Marketing & Creator Outreach Services | VMC Media",
  description: "Connect your brand with top niche creators and influencers. Drive viral brand awareness and engagement across Instagram, YouTube, and LinkedIn.",
  alternates: {
    canonical: "https://www.vmcmedia.in/services/influencer-marketing",
  },
}

export default function InfluencerMarketingPage() {
  return <InfluencerMarketingPageClient />
}



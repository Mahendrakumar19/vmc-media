import { Metadata } from "next"
import { SMMPageClient } from "./client"

export const metadata: Metadata = {
  title: "Social Media Marketing & Meta Ads Services | VMC Media",
  description: "Scale your revenue with Meta (Facebook/Instagram) & LinkedIn performance advertising, viral content strategies, and lead generation funnels.",
  alternates: {
    canonical: "https://www.vmcmedia.in/services/smm",
  },
}

export default function SMMPage() {
  return <SMMPageClient />
}



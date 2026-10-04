import { Metadata } from "next"
import { BrandingPageClient } from "./client"

export const metadata: Metadata = {
  title: "Corporate Branding & Visual Identity Design | VMC Media",
  description: "Stand out with VMC Media's brand identity services: logo design, visual brand guidelines, ad creatives, and high-converting copy.",
  alternates: {
    canonical: "https://www.vmcmedia.in/services/branding",
  },
}

export default function BrandingPage() {
  return <BrandingPageClient />
}



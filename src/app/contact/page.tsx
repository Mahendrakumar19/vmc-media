import type { Metadata } from "next"
import { ContactPageClient } from "./client"

export const metadata: Metadata = {
  title: "Contact Us | VMC Media Pvt. Ltd. | Noida Office",
  description: "Get in touch with VMC Media. Visit our Green Boulevard, Sector-62, Noida office or schedule a free digital marketing and AI automation consultation.",
  alternates: {
    canonical: "https://www.vmcmedia.in/contact",
  },
  openGraph: {
    title: "Contact Us | VMC Media Pvt. Ltd.",
    description: "Connect with VMC Media for digital marketing, SEO, Google Ads, and AI automation solutions.",
    url: "https://www.vmcmedia.in/contact",
    siteName: "VMC Media",
    type: "website",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}


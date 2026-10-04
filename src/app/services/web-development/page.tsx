import { Metadata } from "next"
import { WebDevPageClient } from "./client"

export const metadata: Metadata = {
  title: "Next.js Web Development & SaaS Web Applications | VMC Media",
  description: "High-speed Next.js web application development, headless CMS integration, and responsive web design engineered for maximum conversions and SEO.",
  alternates: {
    canonical: "https://www.vmcmedia.in/services/web-development",
  },
}

export default function WebDevelopmentPage() {
  return <WebDevPageClient />
}



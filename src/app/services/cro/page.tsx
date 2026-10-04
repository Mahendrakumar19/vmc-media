import { Metadata } from "next"
import { CROPageClient } from "./client"

export const metadata: Metadata = {
  title: "Conversion Rate Optimization (CRO) Services | VMC Media",
  description: "Turn existing traffic into paying customers. Data-driven A/B testing, heatmap analysis, UX optimization & landing page conversion engineering.",
  alternates: {
    canonical: "https://www.vmcmedia.in/services/cro",
  },
}

export default function CROPage() {
  return <CROPageClient />
}



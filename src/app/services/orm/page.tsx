import { Metadata } from "next"
import { ORMPageClient } from "./client"

export const metadata: Metadata = {
  title: "Online Reputation Management (ORM) Services | VMC Media",
  description: "Protect and elevate your brand image online. Remove negative search results, suppress bad press, and build positive customer review momentum.",
  alternates: {
    canonical: "https://www.vmcmedia.in/services/orm",
  },
}

export default function ORMPage() {
  return <ORMPageClient />
}



import { Metadata } from "next"
import { EcommercePageClient } from "./client"

export const metadata: Metadata = {
  title: "E-Commerce Growth Marketing & ROAS Scaling | VMC Media",
  description: "Scale Shopify and WooCommerce stores with ROAS-driven performance marketing, Shopping ads, email automation, and CRO.",
  alternates: {
    canonical: "https://www.vmcmedia.in/services/ecommerce",
  },
}

export default function EcommercePage() {
  return <EcommercePageClient />
}



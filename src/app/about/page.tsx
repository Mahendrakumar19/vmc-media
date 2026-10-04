import type { Metadata } from "next";
import { AboutPageClient } from "./client";

export const metadata: Metadata = {
  title: "About Us | VMC Media - Full-Service Digital Marketing Agency & AI Systems",
  description: "Learn about VMC Media, a Noida-based digital marketing agency and AI systems provider with 14+ years of industry experience.",
  alternates: {
    canonical: "https://www.vmcmedia.in/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}

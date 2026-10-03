'use client';

import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

const Header = dynamic(() => import("@/components/Header"), { ssr: false, loading: () => <div className="h-20" /> });
const AboutComponent = dynamic(() => import("@/pages/About"), { ssr: false });

export function AboutPageClient() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutComponent />
      <Footer />
    </div>
  );
}

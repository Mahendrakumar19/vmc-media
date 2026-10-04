import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import ContactSection from '@/components/ContactSection';
import LocalSEOStrip from '@/components/LocalSEOStrip';
import { CITIES_DATA } from '@/lib/cityData';
import { CheckCircle2, MapPin, ArrowRight, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(CITIES_DATA).map((city) => ({
    city,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const cityKey = city?.toLowerCase() || '';
  const cityInfo = CITIES_DATA[cityKey];

  if (!cityInfo) {
    return {
      title: 'Digital Marketing Agency | VMC Media',
      description: 'VMC Media provides digital marketing, SEO, Google Ads, and AI automation.',
    };
  }

  const slug = `best-digital-marketing-agency-in-${cityInfo.slug}`;
  const pageUrl = `https://www.vmcmedia.in/${slug}`;

  return {
    title: cityInfo.metaTitle,
    description: cityInfo.metaDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: cityInfo.metaTitle,
      description: cityInfo.metaDescription,
      url: pageUrl,
      siteName: 'VMC Media',
      type: 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: cityInfo.metaTitle,
      description: cityInfo.metaDescription,
    },
  };
}

export default async function LocalCityPage({ params }: Props) {
  const { city } = await params;
  const cityKey = city?.toLowerCase() || '';
  const cityInfo = CITIES_DATA[cityKey];

  if (!cityInfo) {
    notFound();
  }

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `VMC Media - ${cityInfo.heroHeading}`,
    url: `https://www.vmcmedia.in/best-digital-marketing-agency-in-${cityInfo.slug}`,
    image: 'https://www.vmcmedia.in/logo-vm.png',
    description: cityInfo.metaDescription,
    address: {
      '@type': 'PostalAddress',
      addressLocality: cityInfo.cityName,
      addressRegion: cityInfo.regionName,
      addressCountry: 'IN',
    },
    areaServed: cityInfo.cityName,
    priceRange: '₹₹₹',
    telephone: '+91-9250592505',
    email: 'Info@vmcmedia.in',
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <Header />

      {/* City Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#073D7B]/10 via-background to-background border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2cd1a1]/10 border border-[#2cd1a1]/30 text-[#2cd1a1] text-xs font-bold uppercase tracking-wider mb-6">
            <MapPin className="w-3.5 h-3.5 text-[#2cd1a1]" />
            <span>Serving {cityInfo.cityName} &amp; {cityInfo.regionName}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
            {cityInfo.heroHeading}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            {cityInfo.subHeading}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2cd1a1] hover:bg-[#27b98f] text-white font-bold px-8 py-4 rounded-xl text-base shadow-lg hover:scale-105 transition-all"
            >
              <span>Get Free {cityInfo.cityName} Marketing Audit</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="tel:+919250592505"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-card border border-border hover:bg-muted text-foreground font-bold px-8 py-4 rounded-xl text-base transition-all"
            >
              <PhoneCall className="w-5 h-5 text-[#2cd1a1]" />
              <span>Call +91-9250592505</span>
            </a>
          </div>

          <div className="mt-8 text-xs text-muted-foreground flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#2cd1a1]" />
            <span>{cityInfo.localAddress}</span>
          </div>

        </div>
      </section>

      {/* Why Choose VMC Media in City */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
              Why Businesses in {cityInfo.cityName} Partner With VMC Media
            </h2>
            <p className="text-muted-foreground text-base">
              We combine deep performance marketing expertise with autonomous AI lead qualification to ensure your campaigns deliver measurable revenue in {cityInfo.cityName}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {cityInfo.highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm flex items-start gap-4 hover:border-[#2cd1a1]/50 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2cd1a1]/10 text-[#2cd1a1] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Key Advantage #{idx + 1}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Suite for City */}
      <section className="py-20 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#2cd1a1] uppercase tracking-wider">Growth Solutions</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-1">
              Full-Stack Digital &amp; AI Services in {cityInfo.cityName}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Search Engine Optimization (SEO)',
                desc: `Rank #1 on Google in ${cityInfo.cityName} with keyword research, technical audits, and high-authority link building.`,
                link: '/services/seo',
              },
              {
                title: 'Google Ads & PPC Campaigns',
                desc: `Capture high-intent buyers in ${cityInfo.cityName} with target Search, Shopping, and Performance Max advertising.`,
                link: '/services/google-ads',
              },
              {
                title: 'Social Media & Meta Ads',
                desc: `Scale Facebook, Instagram, and LinkedIn ad funnels to generate steady enquiries from ${cityInfo.cityName} propects.`,
                link: '/services/smm',
              },
              {
                title: 'AI WhatsApp CRM (AIWA)',
                desc: 'Deploy official Meta Cloud API WhatsApp automation with multi-agent inbox & GST invoicing.',
                link: 'https://aiwa.vmcmedia.in',
              },
              {
                title: 'AI Voicebot & Call Qualification',
                desc: 'Automate speed-to-lead outbound calls and inbound front-desk handling with natural conversational voice AI.',
                link: '/ai-solutions/ai-voicebot',
              },
              {
                title: 'Web & Landing Page CRO',
                desc: 'High-speed Next.js web development and landing page optimization designed to maximize conversions.',
                link: '/services/web-development',
              },
            ].map((s, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                <h3 className="font-bold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <Link href={s.link} className="text-xs font-bold text-[#073D7B] dark:text-[#2cd1a1] hover:underline inline-flex items-center gap-1">
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Contact Section */}
      <ContactSection />

      {/* Local SEO Cities Strip */}
      <LocalSEOStrip />

      {/* CTA Section */}
      <CTA />

      <Footer />
    </main>
  );
}

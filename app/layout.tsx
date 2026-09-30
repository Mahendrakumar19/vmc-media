import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '../src/index.css'
import { Providers } from './providers'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light dark',
}

export const metadata: Metadata = {
  title: 'VMC Media | Digital Marketing & AI Automation',
  description: 'VMC Media combines digital marketing, AI chatbots, AI voicebots and lead automation to help businesses generate, engage and convert more customers.',
  authors: [{ name: 'VMC Media' }],
  keywords: ['AI Automation', 'AI Chatbot', 'AI Voicebot', 'AI Lead Qualification', 'Lead Generation', 'Sales Automation', 'WhatsApp Automation', 'Conversational AI', 'CRM Integration', 'Appointment Booking', 'digital marketing', 'SEO services', 'content marketing', 'social media marketing', 'PPC advertising'],
  metadataBase: new URL('https://www.vmcmedia.in'),
  alternates: {
    canonical: 'https://www.vmcmedia.in/',
  },
  openGraph: {
    title: 'VMC Media | Digital Marketing & AI Automation',
    description: 'VMC Media combines digital marketing, AI chatbots, AI voicebots and lead automation to help businesses generate, engage and convert more customers.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.vmcmedia.in',
    siteName: 'VMC Media',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VMC Media | Digital Marketing & AI Automation',
    description: 'VMC Media combines digital marketing, AI chatbots, AI voicebots and lead automation to help businesses generate, engage and convert more customers.',
    creator: '@vmcmedia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Font preconnection */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/logo-vm.png" />
        
        {/* Favicon and manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Google Analytics 4 - Async loading */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
                send_page_view: true,
              });
            `,
          }}
        />

        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'VMC Media',
              url: 'https://www.vmcmedia.in/',
              logo: 'https://www.vmcmedia.in/logo-vm.png',
              description: 'AI-Powered Digital Marketing & Automation Agency specializing in SEO, Google Ads, AI Chatbots, Voicebots, and Sales Automation.',
              sameAs: [
                'https://facebook.com/vmcmedia',
                'https://instagram.com/vmcmedia',
                'https://linkedin.com/company/vmcmedia',
                'https://youtube.com/@vmcmedia',
                'https://twitter.com/vmcmedia',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                telephone: '+91-9250592505',
                email: 'Info@vmcmedia.in',
              },
            }),
          }}
        />

        {/* Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Website',
              url: 'https://www.vmcmedia.in/',
              name: 'VMC Media',
              description: 'Digital marketing and AI Automation services for businesses',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.vmcmedia.in/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

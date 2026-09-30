import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: '404 - Page Not Found | VMC Media Digital Marketing',
  description: 'Page not found. Return to VMC Media homepage or contact our digital marketing experts for assistance with your project.',
  alternates: {
    canonical: 'https://vmcmedia.com/404',
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL or the page has been moved.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90">
                Go Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </main>    </div>
  )
}

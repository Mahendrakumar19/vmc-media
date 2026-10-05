import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | VMC Media',
  description: 'Explore VMC Media client success stories across Real Estate, E-Commerce, Healthcare, and Education sectors.',
  alternates: {
    canonical: 'https://www.vmcmedia.in/portfolio',
  },
}

export default function PortfolioPage() {
  // Redirect to home with portfolio anchor
  redirect('/#portfolio');
}

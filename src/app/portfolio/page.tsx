import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://vmcmedia.com/portfolio',
  },
}

export default function PortfolioPage() {
  // Redirect to home with portfolio anchor
  redirect('/#portfolio');
}

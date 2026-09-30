// SEO is now handled by Next.js Metadata API in page.tsx files
// This component is kept for backward compatibility but does nothing

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

const SEO = (props: SEOProps) => {
  // Next.js handles SEO through the Metadata API in each page.tsx file
  // This component is now a no-op for backward compatibility
  return null;
};

export default SEO;

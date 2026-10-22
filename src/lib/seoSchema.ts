export interface ServiceSchemaConfig {
  name: string
  description: string
  serviceType: string
  url: string
  image?: string
}

export function generateServiceJsonLd(config: ServiceSchemaConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: config.name,
    description: config.description,
    serviceType: config.serviceType,
    url: config.url,
    image: config.image || 'https://www.vmcmedia.in/about-vmc-agency.png',
    provider: {
      '@type': 'LocalBusiness',
      name: 'VMC Media',
      url: 'https://www.vmcmedia.in',
      logo: 'https://www.vmcmedia.in/logo-vm.svg',
      telephone: '+91-9811204910',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '501, 5th Floor, Tower C, Block C, Green Boulevard, B-9/A, Sector 62',
        addressLocality: 'Noida',
        addressRegion: 'Uttar Pradesh',
        postalCode: '201301',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 28.628,
        longitude: 77.3649,
      },
    },
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'City', name: 'Noida' },
      { '@type': 'City', name: 'Delhi' },
      { '@type': 'City', name: 'Gurgaon' },
      { '@type': 'City', name: 'Bangalore' },
      { '@type': 'City', name: 'Mumbai' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${config.name} Packages`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `${config.name} Consultation & Strategy`,
          },
        },
      ],
    },
  }
}

export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateArticleJsonLd(article: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified: string
  authorName?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    image: article.image || 'https://www.vmcmedia.in/about-vmc-agency.png',
    author: {
      '@type': 'Person',
      name: article.authorName || 'VMC Media Strategy Team',
      url: 'https://www.vmcmedia.in/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'VMC Media',
      url: 'https://www.vmcmedia.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.vmcmedia.in/logo-vm.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  }
}

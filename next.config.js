/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  compress: true,
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: [
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/react-fontawesome',
      'lucide-react',
      'framer-motion',
      'date-fns',
    ],
  },
  async redirects() {
    return [
      {
        source: '/privacy',
        destination: '/pages/privacy',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/pages/privacy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/pages/terms',
        permanent: true,
      },
      {
        source: '/services/social-media',
        destination: '/services/smm',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig

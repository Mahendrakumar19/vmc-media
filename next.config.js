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
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'vmcmedia.in',
          },
        ],
        destination: 'https://www.vmcmedia.in/:path*',
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
      {
        source: '/services/technology-solutions',
        destination: '/technology-solutions',
        permanent: true,
      },
      {
        source: '/services/technology-solutions/:path*',
        destination: '/technology-solutions/:path*',
        permanent: true,
      },
      {
        source: '/services/web-development',
        destination: '/technology-solutions/web-development',
        permanent: true,
      },
      {
        source: '/services/mobile-app',
        destination: '/technology-solutions/mobile-app',
        permanent: true,
      },
      {
        source: '/services/custom-software',
        destination: '/technology-solutions/custom-software',
        permanent: true,
      },
      {
        source: '/services/cloud-deployment',
        destination: '/technology-solutions/cloud-deployment',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,OPTIONS,PUT,DELETE,PATCH' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization, Origin' },
        ],
      },
    ];
  },
};

module.exports = nextConfig

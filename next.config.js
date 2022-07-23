/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  optimizeFonts: true,
  pageExtensions: ['page.tsx', 'page.ts'],
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        destination: '/top',
        source: '/',
      },
    ];
  },
  swcMinify: true,
};

module.exports = nextConfig;

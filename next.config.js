/** @type {import('next').NextConfig} */
const nextConfig = {
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
}

module.exports = nextConfig

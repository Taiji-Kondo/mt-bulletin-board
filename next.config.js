/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  pageExtensions: ['page.tsx'],
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        destination: '/top',
        source: '/',
      },
    ];
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [1, 10, 25, 50, 75],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    STOREFRONT_API_KEY: process.env.STOREFRONT_API_KEY,
  },
};

module.exports = nextConfig;

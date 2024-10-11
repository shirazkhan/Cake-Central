module.exports = {
    images: {
      domains: ['cdn.shopify.com'],
    },
    compiler: {
      styledComponents: true,
    },
    env: {
      STOREFRONT_API_KEY: process.env.STOREFRONT_API_KEY,
    },
  }

  
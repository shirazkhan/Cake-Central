import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const STOREFRONT_API_KEY = process.env.STOREFRONT_API_KEY;

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'https://cakecentraluk.myshopify.com/api/2024-04/graphql.json',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': STOREFRONT_API_KEY
      }
    })
  });

export default client;
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const apiKey = process.env.STOREFRONT_API_KEY;

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'https://cakecentraluk.myshopify.com/api/2025-01/graphql.json',
      headers: {
        'X-Shopify-Storefront-Access-Token': apiKey,
        'Content-Type': 'application/json'
      }
    })
  });

export default client;
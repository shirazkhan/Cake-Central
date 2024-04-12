import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'https://708540-20.myshopify.com/api/2024-01/graphql.json',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': "f62cac46857a6a972a1ed88194123955"
      }
    })
    // uri: 'https://ecdc7f91ed0970e733268535c828fbbe@graphql.myshopify.com/api/2021-07/graphql.json'
    //uri: "https://api.spacex.land/graphql/"
  });

export default client;
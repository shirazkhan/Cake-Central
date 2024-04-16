import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'https://8654e9-a7.myshopify.com/api/2024-01/graphql.json',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': "06e42c9d56dcdeb4992db26756be44ec"
      }
    })
    // uri: 'https://ecdc7f91ed0970e733268535c828fbbe@graphql.myshopify.com/api/2021-07/graphql.json'
    //uri: "https://api.spacex.land/graphql/"
  });

export default client;
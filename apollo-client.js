import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'https://sshirazz-test3.myshopify.com/api/2021-10/graphql.json',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': "81067e8e4eb0349afd148d9eeab89153"
      }
    })
    // uri: 'https://ecdc7f91ed0970e733268535c828fbbe@graphql.myshopify.com/api/2021-07/graphql.json'
    //uri: "https://api.spacex.land/graphql/"
  });

export default client;
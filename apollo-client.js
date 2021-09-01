import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://ecdc7f91ed0970e733268535c828fbbe@graphql.myshopify.com/api/2021-07/graphql.json'
    //uri: "https://api.spacex.land/graphql/"
  });

export default client;
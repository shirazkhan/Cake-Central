import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://4f24b14a63b09ccf429727602aa54f6f@teststoreshiraz.myshopify.com/api/2021-07/graphql.json'
    // uri: 'https://ecdc7f91ed0970e733268535c828fbbe@graphql.myshopify.com/api/2021-07/graphql.json'
    //uri: "https://api.spacex.land/graphql/"
  });

export default client;
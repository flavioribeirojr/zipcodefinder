import { ApolloClient, InMemoryCache } from '@apollo/client';

export const GraphqlClient = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});
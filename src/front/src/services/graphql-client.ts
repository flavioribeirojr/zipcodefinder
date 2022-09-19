import { ApolloClient, InMemoryCache } from '@apollo/client';

export const GraphqlClient = new ApolloClient({
    uri: 'http://localhost:5320',
    cache: new InMemoryCache(),
});
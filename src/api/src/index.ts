import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { GQLTypeDefinitions } from './gql-type-definitions';

const Server = new ApolloServer({
  typeDefs: GQLTypeDefinitions,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true })
  ]
});

Server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`Server running at ${url}`);
});
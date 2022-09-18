import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ZipCodeFinderDatasource } from './datasource/zip-code-finder.datasource';
import { Queries } from './queries';

const Server = new ApolloServer({
  typeDefs: Queries.TypeDefinitions,
  resolvers: Queries.Resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true })
  ],
  dataSources: () => ({
    zipCode: new ZipCodeFinderDatasource()
  })
});

Server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`Server running at ${url}`);
});
import { gql } from 'apollo-server-core';
import { ZipCodeFinderQuery } from './zip-code-finder.query';

const RootTypeDefinitions = gql`
    type Query {
        _empty: String
    }
`;

const TypeDefinitions = [RootTypeDefinitions, ZipCodeFinderQuery.TypeDefinition];

const Resolvers = {
  Query: {
    ...ZipCodeFinderQuery.Resolver.Query
  }
};

export const Queries = {
  TypeDefinitions,
  Resolvers
};
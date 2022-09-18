import { gql } from 'apollo-server-core';
import { ServerContext } from '../types/server-context';

async function Resolver(
  parent: undefined,
  args: { zipCode: string, countryCode: string },
  context: ServerContext
) {
  const response = await context
    .dataSources
    .zipCode
    .find(args);

  const firstPlace = response.places[0];

  return {
    zipCode: response['post code'],
    countryCode: response['country abbreviation'],
    city: firstPlace['place name'],
    stateCode: firstPlace['state abbreviation']
  };
}

const TypeDefinition = gql`
    extend type Query {
        zipCode(zipCode: String, countryCode: String): ZipCodeInfo
    }

    type ZipCodeInfo {
        zipCode: String
        countryCode: String
        city: String
        stateCode: String
    }
`;

export const ZipCodeFinderQuery = {
  TypeDefinition,
  Resolver: {
    Query: {
      zipCode: Resolver
    }
  }
};
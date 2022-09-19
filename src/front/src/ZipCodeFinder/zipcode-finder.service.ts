import { gql, useLazyQuery } from '@apollo/client';

const ZipCodeFindQuery = gql`
    query FindZipCode($zipCode: String, $countryCode: String) {
        zipCode(zipCode: $zipCode, countryCode: $countryCode) {
            zipCode,
            city,
            stateCode
        }
    }
`;

export function useZipcodeFinderService() {
  const [ find ] = useLazyQuery<{ zipCode: ZipCodeInfo }>(ZipCodeFindQuery);

  async function findZipCode(input: ZipCodeFindQueryInput) {
    const response = await find({
      variables: {
        zipCode: input.zipCode,
        countryCode: input.countryCode
      }
    });

    if (response.error) {
      throw response.error;
    }

    if (!response.data) {
      throw new Error('Zip code information not found');
    }

    return response.data.zipCode;
  }

  return {
    findZipCode
  };
}

export interface ZipCodeInfo {
  zipCode: string;
  city: string;
  stateCode: string;
}

export interface ZipCodeFindQueryInput {
  zipCode: string;
  countryCode: string;
}
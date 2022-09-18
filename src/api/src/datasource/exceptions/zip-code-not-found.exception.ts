import { ApolloError } from 'apollo-server-errors';

export class ZipCodeNotFoundException extends ApolloError {
  constructor() {
    super('No zip code information found', 'ZIP_CODE_NOT_FOUND');
  }
}
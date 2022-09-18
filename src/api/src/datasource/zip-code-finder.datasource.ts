import { RESTDataSource } from 'apollo-datasource-rest';
import { ZipCodeNotFoundException } from './exceptions/zip-code-not-found.exception';

export class ZipCodeFinderDatasource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.zippopotam.us';
  }

  async find(query: ZipCodeQuery) {
    const response = await this.get<ZipCodeFindResponse>(`${query.countryCode}/${query.zipCode}`);

    if (!response['post code']) {
      throw new ZipCodeNotFoundException();
    }

    return response;
  }
}

export interface ZipCodeQuery {
  countryCode: string;
  zipCode: string;
}

interface ZipCodeFindResponse {
  'post code': string;
  country: string;
  'country abbreviation': string;
  places: {
    'place name': string;
    latitude: string;
    longitude: string;
    state: string;
    'state abbreviation': string;
  }[];
}
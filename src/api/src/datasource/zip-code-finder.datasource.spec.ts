import { ZipCodeNotFoundException } from './exceptions/zip-code-not-found.exception';
import { ZipCodeFinderDatasource } from './zip-code-finder.datasource';

const mockGet = jest.fn();

jest.mock('apollo-datasource-rest', () => {
  class MockRESTDataSource {
    baseUrl = '';
    get = mockGet;
  }

  return {
    RESTDataSource: MockRESTDataSource,
  };
});

describe('ZipCodeFinderDatasource', () => {
  it('must throw ZIP_CODE_NOT_FOUND when no place is found', async () => {
    jest
      .spyOn(ZipCodeFinderDatasource.prototype, 'find')
      .mockImplementation(async () => {
        throw new ZipCodeNotFoundException();
      });

    const datasource = new ZipCodeFinderDatasource();
    const findPromise = datasource.find({ countryCode: 'US', zipCode: '85225' });

    await expect(findPromise).rejects.toThrowError(ZipCodeNotFoundException);
  });

  it('must return a place using the provided zip code and country', async () => {
    const expectedReturn = {
      'post code': '85225',
      country: 'United States',
      'country abbreviation': 'US',
      places: [{
        'place name': 'Chandler',
        latitude: '',
        longitude: '',
        state: 'Arizona',
        'state abbreviation': 'AZ'
      }]
    };

    jest
      .spyOn(ZipCodeFinderDatasource.prototype, 'find')
      .mockImplementation(async () => expectedReturn);

    const datasource = new ZipCodeFinderDatasource();
    const response = await datasource.find({ countryCode: 'US', zipCode: '85225' });

    expect(response).toMatchObject(expectedReturn);
  });
});
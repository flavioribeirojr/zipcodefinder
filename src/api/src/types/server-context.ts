import { ZipCodeFinderDatasource } from '../datasource/zip-code-finder.datasource';

export interface ServerContext {
  dataSources: {
    zipCode: ZipCodeFinderDatasource
  }
}
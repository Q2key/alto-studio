import { GenericDataSource } from '../../contracts/generic-data.source';

export class AbstractMongoDataSource<T> implements GenericDataSource<T> {
  getDataSource(): T {
    return undefined;
  }
}

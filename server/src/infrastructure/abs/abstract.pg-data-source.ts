import { GenericDataSource } from '../../contracts/generic-data.source';

export class AbstractPgDataSource<T> implements GenericDataSource<T> {
  getDataSource(): T {
    return undefined;
  }
}

import { GenericDataSource } from '../../contracts/generic-data.source';

export abstract class AbstractDataSource<T> implements GenericDataSource<T> {
  abstract getDataSource(): T;
}

export abstract class AbstractPgDataSource<T> extends AbstractDataSource<T> {}

export abstract class AbstractMongoDataSource<
  T,
> extends AbstractDataSource<T> {}

import { GenericRepository } from './generic-repository';

export interface GenericDataSource<TDataSource> {
  initialize: () => Promise<TDataSource>;
}

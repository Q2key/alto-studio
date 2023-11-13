import { GenericDataSource } from '../../contracts/generic-data.source';

export class TypeormRedisDataSource implements GenericDataSource<unknown> {
  getDataSource(): unknown {
    return undefined;
  }

  initDataSource(): Promise<void> {
    return Promise.resolve(undefined);
  }
}

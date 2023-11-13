import { GenericDataSource } from '../../contracts/generic-data.source';

export class TypeormMongoDataSource implements GenericDataSource<unknown> {
  getDataSource(): unknown {
    return Promise.resolve();
  }

  initDataSource(): Promise<void> {
    return Promise.resolve(undefined);
  }
}

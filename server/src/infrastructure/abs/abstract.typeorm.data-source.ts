import { GenericDataSource } from '../../contracts/generic-data.source';
import { DataSource } from 'typeorm';

export abstract class AbstractTypeormDataSource
  implements GenericDataSource<DataSource>
{
  abstract getDataSource(): DataSource;

  abstract initDataSource(): Promise<void>;
}

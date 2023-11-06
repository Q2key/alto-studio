import { GenericDbDataSource } from '../../contracts/generic-db-data.source';
import { DataSourceOptions } from 'typeorm';

export abstract class TypeOrmAbstractDs
  implements GenericDbDataSource<DataSourceOptions>
{
  abstract getDataSource(): DataSourceOptions;
  abstract initDataSource(): Promise<void>;
}

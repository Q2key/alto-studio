import { GenericDataSource } from '../../contracts/data-source';
import { DataSource, DataSourceOptions } from 'typeorm';

export abstract class TypeOrmDataSource
  implements GenericDataSource<DataSource>
{
  private ds: DataSource;

  protected constructor(options: DataSourceOptions) {
    this.ds = new DataSource(options);
  }

  async initDataSource(): Promise<void> {
    this.ds = await this.ds.initialize();
  }

  getDataSource(): DataSource {
    return this.ds;
  }
}

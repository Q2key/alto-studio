import { GenericDataSource } from '../../contracts/generic-data.source';
import { DataSource as TypeOrmDataSource } from 'typeorm/data-source/DataSource';

export class TypeOrmBaseDataSource
  implements GenericDataSource<TypeOrmDataSource>
{
  protected dataSource: TypeOrmDataSource;

  async initDataSource(): Promise<void> {
    if (this.dataSource.isInitialized) {
      throw new Error('DataSource is already initialized');
    }

    await this.dataSource.initialize();
  }

  getDataSource(): TypeOrmDataSource {
    if (!this.dataSource.isInitialized) {
      throw new Error('DataSource is not initialized');
    }

    return this.dataSource;
  }
}

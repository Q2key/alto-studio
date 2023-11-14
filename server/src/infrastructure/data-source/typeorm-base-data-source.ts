import { DataSource as TypeOrmDataSource } from 'typeorm/data-source/DataSource';
import { AbstractDataSource } from '../abs/abstract.data-source';

export class TypeOrmBaseDataSource
  implements AbstractDataSource<TypeOrmDataSource>
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

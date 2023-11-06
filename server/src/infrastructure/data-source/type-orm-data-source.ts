import { DataSource } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { GenericDbDataSource } from '../../contracts/generic-db-data.source';

export class TypeOrmDataSource implements GenericDbDataSource<DataSource> {
  private readonly dataSource: DataSource;
  constructor() {
    const ds = new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: 5435,
      username: 'postgres',
      password: 'postgres',
      database: 'alto',
      synchronize: true,
      logging: false,
      entities: [UserEntity],
      migrations: [],
      subscribers: [],
    });

    this.dataSource = ds;
  }

  async initDataSource(): Promise<void> {
    if (this.dataSource.isInitialized) {
      throw new Error('DataSource is already initialized');
    }

    await this.dataSource.initialize();
  }

  getDataSource(): DataSource {
    if (!this.dataSource.isInitialized) {
      throw new Error('DataSource is not initialized');
    }

    return this.dataSource;
  }
}

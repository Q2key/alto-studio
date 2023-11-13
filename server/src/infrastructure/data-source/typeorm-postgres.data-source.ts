import { DataSource as TypeOrmDataSource } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { AbstractTypeormDataSource } from '../abs/abstract.typeorm.data-source';

export class TypeormPostgresDataSource extends AbstractTypeormDataSource {
  private readonly dataSource: TypeOrmDataSource;

  constructor() {
    super();
    const ds = new TypeOrmDataSource({
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

  getDataSource(): TypeOrmDataSource {
    if (!this.dataSource.isInitialized) {
      throw new Error('DataSource is not initialized');
    }

    return this.dataSource;
  }
}

import { DataSource as TypeOrmDataSource } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { AbstractTypeormDataSource } from '../abs/abstract.typeorm.data-source';
import { ConfigModule } from '@nestjs/config';
import { AppConfig } from '../../contracts/app-config';

export class TypeormPostgresDataSource extends AbstractTypeormDataSource {
  private readonly dataSource: TypeOrmDataSource;

  constructor(cfg: ConfigModule) {
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

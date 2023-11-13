import { DataSource as TypeOrmDataSource } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { AbstractTypeormDataSource } from '../abs/abstract.typeorm.data-source';
import { Injectable } from '@nestjs/common';
import { PostgresConfig } from '../../contracts/app-config';

@Injectable()
export class TypeormPostgresDataSource extends AbstractTypeormDataSource {
  private readonly dataSource: TypeOrmDataSource;

  constructor(private pgConfig: PostgresConfig) {
    super();
    const ds = new TypeOrmDataSource({
      type: 'postgres',
      host: pgConfig.host,
      port: pgConfig.port,
      username: pgConfig.username,
      password: pgConfig.password,
      database: pgConfig.database,
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

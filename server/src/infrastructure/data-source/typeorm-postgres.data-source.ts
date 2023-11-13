import { DataSource as TypeOrmDataSource } from 'typeorm';
import { UserEntity } from '../entities/postgres/user.entity';
import { Injectable } from '@nestjs/common';
import { PostgresConfig } from '../../contracts/app-config';
import { TypeOrmBaseDataSource } from './typeorm-base-data-source';

@Injectable()
export class TypeormPostgresDataSource extends TypeOrmBaseDataSource {
  constructor(private pgConfig: PostgresConfig) {
    super();
    this.dataSource = new TypeOrmDataSource({
      type: 'postgres',
      host: this.pgConfig.host,
      port: this.pgConfig.port,
      username: this.pgConfig.username,
      password: this.pgConfig.password,
      database: this.pgConfig.database,
      synchronize: true,
      logging: false,
      entities: [UserEntity],
      migrations: [],
      subscribers: [],
    });
  }
}

import { UserEntity } from '../entities/user.entity';
import { TypeOrmDataSource } from './typeorm-data-source';

export class PostgresTypeOrmDataSource extends TypeOrmDataSource {
  constructor() {
    super({
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
  }
}

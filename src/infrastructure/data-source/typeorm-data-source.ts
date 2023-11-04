import { GenericDataSource } from '../../contracts/data-source';
import { DataSource, DataSource as TypeOrmDataSource } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

export class TypeormDataSource implements GenericDataSource<TypeOrmDataSource> {
  async initialize(): Promise<TypeOrmDataSource> {
    const dataSource = new DataSource({
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

    return await dataSource.initialize();
  }
}

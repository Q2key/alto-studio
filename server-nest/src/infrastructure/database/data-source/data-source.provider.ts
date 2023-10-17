import { DataSource } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { Provider } from '@nestjs/common';
import { Scope } from '../../../contracts/scope';

export const DataSourceProvider: Provider = {
  provide: Scope.DATA_SOURCE,
  useFactory: async () => {
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
  },
};

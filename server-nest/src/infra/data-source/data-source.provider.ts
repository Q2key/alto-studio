import { DataSource } from 'typeorm';
import { UserEntity } from '../database/entities/user.entity';
import { Provider } from '@nestjs/common';

export const DatabaseProvider: Provider = {
  provide: 'DATA_SOURCE',
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
    return dataSource.initialize();
  },
};

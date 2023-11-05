import { Provider } from '@nestjs/common';
import { IocTokens } from '../../contracts/IocTokens';
import { DataSource } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

export const TypeormDataSourceProvider: Provider = {
  provide: IocTokens.DATA_SOURCE,
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

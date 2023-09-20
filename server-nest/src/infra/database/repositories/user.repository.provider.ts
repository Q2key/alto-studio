import { DataSource } from 'typeorm';
import { UserRepository } from './user.repository';

export const UserRepositoryProvider = {
  provide: 'USER_REPOSITORY',
  useFactory: (dataSource: DataSource) => new UserRepository(dataSource),
  inject: ['DATA_SOURCE'],
};

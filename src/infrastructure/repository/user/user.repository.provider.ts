import { DataSource } from 'typeorm';
import { UserRepository } from './user.repository';
import { InjectionScope } from '../../../contracts/types/InjectionScope';

export const UserRepositoryProvider = {
  provide: InjectionScope.USER_REPOSITORY,
  useFactory: (dataSource: DataSource) => new UserRepository(dataSource),
  inject: [InjectionScope.DATA_SOURCE],
};

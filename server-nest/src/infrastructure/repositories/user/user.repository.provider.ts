import { DataSource } from 'typeorm';
import { UserRepository } from './user.repository';
import { Scope } from '../../../contracts/scope';

export const UserRepositoryProvider = {
  provide: Scope.USER_REPOSITORY,
  useFactory: (dataSource: DataSource) => new UserRepository(dataSource),
  inject: [Scope.DATA_SOURCE],
};

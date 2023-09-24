import { Provider } from '@nestjs/common';
import { UserRepository } from '../../infra/database/repositories/user.repository';
import { UserUseCases } from './user.use-cases';

export const UserUseCasesProvider: Provider = {
  provide: 'UserUseCases',
  useFactory: (repository: UserRepository) => new UserUseCases(repository),
  inject: ['USER_REPOSITORY'],
};

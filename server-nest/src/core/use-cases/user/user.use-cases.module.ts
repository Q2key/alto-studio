import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../infra/db/database.module';
import { UserRepositoryProvider } from '../../../infra/db/repositories/user.repository-provider';
import { UserUseCases } from './user.use-cases';

@Module({
  imports: [DatabaseModule],
  providers: [UserRepositoryProvider, UserUseCases],
  exports: [UserRepositoryProvider, UserUseCases],
})
export class UserUseCasesModule {}

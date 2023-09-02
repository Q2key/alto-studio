import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../services/db-service/database.module';
import { UserRepositoryProvider } from '../../../services/db-service/repositories/user.repository-provider';
import { UserUseCases } from './user.use-cases';

@Module({
  imports: [DatabaseModule],
  providers: [UserRepositoryProvider, UserUseCases],
  exports: [UserRepositoryProvider, UserUseCases],
})
export class UserUseCasesModule {}

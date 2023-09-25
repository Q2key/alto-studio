import { Module } from '@nestjs/common';
import { UserRepositoryProvider } from '../infra/database/repositories/user.repository.provider';
import { InfraModule } from '../infra/infra.module';
import { UserUseCases } from './user.use-cases';

@Module({
  imports: [InfraModule],
  providers: [UserRepositoryProvider, UserUseCases],
  exports: [UserUseCases],
})
export class UseCasesModule {}
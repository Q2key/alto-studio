import { Module } from '@nestjs/common';
import { UserRepositoryProvider } from '../infra/database/repositories/user.repository.provider';
import { UserUseCasesProvider } from './user/user.use-cases.provider';
import { InfraModule } from '../infra/infra.module';

@Module({
  imports: [InfraModule],
  providers: [UserRepositoryProvider, UserUseCasesProvider],
  exports: [UserUseCasesProvider],
})
export class DomainModule {}

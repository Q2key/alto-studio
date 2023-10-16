import { Module } from '@nestjs/common';
import { InfraModule } from '../../services/services.module';
import { UserUseCases } from './user/user.use-cases';
import { UserFactory } from './user/user.factory';

@Module({
  imports: [InfraModule],
  providers: [UserUseCases, UserFactory],
  exports: [UserUseCases],
})
export class UseCasesModule {}

import { Module } from '@nestjs/common';
import { InfraModule } from '../../infra/infra.module';
import { UserUseCases } from './user/user.use-cases';

@Module({
  imports: [InfraModule],
  providers: [UserUseCases],
  exports: [UserUseCases],
})
export class UseCasesModule {}

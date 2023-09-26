import { Module } from '@nestjs/common';
import { InfraModule } from '../../infra/infra.module';
import { UserUseCases } from './user/user.use-cases';
import { UserService } from './user/user.service';

@Module({
  imports: [InfraModule],
  providers: [UserUseCases, UserService],
  exports: [UserUseCases],
})
export class UseCasesModule {}

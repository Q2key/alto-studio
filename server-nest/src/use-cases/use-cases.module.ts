import { Module } from '@nestjs/common';
import { UserFactory } from './create-user/user.factory';
import { DatabaseModule } from '../infrastructure/database/database.module';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { CreateUserUseCase } from './create-user/create-user.use-case';
import { GetUsersUserUseCase } from './get-users/get-users-user.use-case';

@Module({
  imports: [DatabaseModule, InfrastructureModule],
  providers: [CreateUserUseCase, GetUsersUserUseCase, UserFactory],
  exports: [CreateUserUseCase, GetUsersUserUseCase],
})
export class UseCasesModule {}

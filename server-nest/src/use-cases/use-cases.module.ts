import { Module } from '@nestjs/common';
import { UserUseCases } from './user/user.use-cases';
import { UserFactory } from './user/user.factory';

@Module({
  imports: [],
  providers: [UserUseCases, UserFactory],
  exports: [UserUseCases],
})
export class UseCasesModule {}

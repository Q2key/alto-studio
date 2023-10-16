import { Module } from '@nestjs/common';
import { UserUseCases } from './user/user.use-cases';
import { UserFactory } from './user/user.factory';
import { DatabaseModule } from '../database/database.module';
import { ServicesModule } from '../services/services.module';

@Module({
  imports: [DatabaseModule, ServicesModule],
  providers: [UserUseCases, UserFactory],
  exports: [UserUseCases],
})
export class UseCasesModule {}

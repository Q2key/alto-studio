import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../infra/db/database.module';
import { UserUseCases } from './user.use-cases';

@Module({
  imports: [DatabaseModule],
  providers: [UserUseCases],
  exports: [UserUseCases],
})
export class UserUseCasesModule {}

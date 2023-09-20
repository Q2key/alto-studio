import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../infra/database/database.module';
import { UserUseCases } from './user/user.use-cases';

@Module({
  imports: [DatabaseModule],
  providers: [UserUseCases],
  exports: [UserUseCases],
})
export class UseCasesModule {}

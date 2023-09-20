import { Module } from '@nestjs/common';
import { DatabaseProvider } from './database.provider';
import { UserRepositoryProvider } from './repositories/user.repository.provider';

@Module({
  providers: [DatabaseProvider, UserRepositoryProvider],
  exports: [DatabaseProvider, UserRepositoryProvider],
})
export class DatabaseModule {}

import { Module } from '@nestjs/common';
import { UserRepositoryProvider } from './repositories/user/user.repository.provider';
import { DataSourceProvider } from './data-source/data-source.provider';

@Module({
  providers: [UserRepositoryProvider, DataSourceProvider],
  exports: [UserRepositoryProvider, DataSourceProvider],
})
export class DatabaseModule {}

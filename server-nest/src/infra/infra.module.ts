import { Module } from '@nestjs/common';
import { DataSourceModule } from './database/data-source/data-source.module';
import { UserRepositoryProvider } from './database/repositories/user.repository.provider';

@Module({
  imports: [DataSourceModule],
  providers: [UserRepositoryProvider],
  exports: [DataSourceModule, UserRepositoryProvider],
})
export class InfraModule {}

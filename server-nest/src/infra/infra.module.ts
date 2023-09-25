import { Module } from '@nestjs/common';
import { DataSourceModule } from './database/data-source/data-source.module';
import { UserRepositoryProvider } from './database/repositories/user.repository.provider';
import { ArgonCryptoProvider } from './crypto/argon-crypto.provider';

@Module({
  imports: [DataSourceModule],
  providers: [UserRepositoryProvider, ArgonCryptoProvider],
  exports: [DataSourceModule, UserRepositoryProvider, ArgonCryptoProvider],
})
export class InfraModule {}

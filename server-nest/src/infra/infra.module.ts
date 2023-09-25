import { Module } from '@nestjs/common';
import { DataSourceModule } from './database/data-source/data-source.module';
import { UserRepositoryProvider } from './database/repositories/user.repository.provider';
import { ArgonCryptoService } from './crypto/argon-crypto';

@Module({
  imports: [DataSourceModule],
  providers: [UserRepositoryProvider, ArgonCryptoService],
  exports: [DataSourceModule, UserRepositoryProvider, ArgonCryptoService],
})
export class InfraModule {}

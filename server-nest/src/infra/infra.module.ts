import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ArgonCryptoModule } from './crypto/argon-crypto.module';

@Module({
  imports: [DatabaseModule, ArgonCryptoModule],
  exports: [DatabaseModule, ArgonCryptoModule],
})
export class InfraModule {}

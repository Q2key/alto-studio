import { Module } from '@nestjs/common';
import { ArgonCryptoModule } from './crypto/argon-crypto.module';

@Module({
  imports: [ArgonCryptoModule],
  exports: [ArgonCryptoModule],
})
export class ServicesModule {}

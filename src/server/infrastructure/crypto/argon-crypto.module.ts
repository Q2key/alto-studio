import { Module } from '@nestjs/common';
import { ArgonCryptoProvider } from './argon-crypto.provider';

@Module({
  providers: [ArgonCryptoProvider],
  exports: [ArgonCryptoProvider],
})
export class ArgonCryptoModule {}

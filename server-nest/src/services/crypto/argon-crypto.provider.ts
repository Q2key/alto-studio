import { Provider } from '@nestjs/common';
import { Scope } from '../../app/core/scope';
import { ArgonCryptoService } from './argon-crypto';

export const ArgonCryptoProvider: Provider = {
  provide: Scope.CRYPTO_SERVICE,
  useClass: ArgonCryptoService,
};

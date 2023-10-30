import { Provider } from '@nestjs/common';
import { InjectionScope } from '../../contracts/types/InjectionScope';
import { ArgonCryptoService } from './argon-crypto';

export const ArgonCryptoProvider: Provider = {
  provide: InjectionScope.CRYPTO_SERVICE,
  useClass: ArgonCryptoService,
};

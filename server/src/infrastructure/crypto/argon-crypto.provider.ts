import { Provider } from '@nestjs/common';
import { IocTokens } from '../../contracts/IocTokens';
import { ArgonCryptoService } from './argon-crypto';

export const ArgonCryptoProvider: Provider = {
  provide: IocTokens.CRYPTO_SERVICE,
  useClass: ArgonCryptoService,
};

import { CryptoService } from '../../contracts/crypto-service';

export abstract class AbstractCryptoService implements CryptoService {
  abstract encryptString(
    rawString: string,
    salt: string | undefined,
  ): Promise<string>;
  abstract verifyPassword(hash: string, plain: string): Promise<boolean>;
  abstract generateSalt(secret?: string): Promise<string>;
}

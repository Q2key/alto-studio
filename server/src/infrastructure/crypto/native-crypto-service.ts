import { Injectable } from '@nestjs/common';
import { AbstractCryptoService } from '../abs/abstract-crypto-service';

@Injectable()
export class NativeCryptoService extends AbstractCryptoService {
  public async encryptString(
    rawString: string,
    salt?: string,
  ): Promise<string> {
    return Promise.resolve('string');
  }

  public async generateSalt(secret?: string): Promise<string> {
    return Promise.resolve('');
  }

  public async verifyPassword(hash: string, plain: string): Promise<boolean> {
    return Promise.resolve(true);
  }
}

import { CryptoService } from '../../contracts/crypto-service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NativeCryptoService implements CryptoService {
  constructor() {}

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

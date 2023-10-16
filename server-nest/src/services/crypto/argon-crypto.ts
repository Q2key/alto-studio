import argon2 from 'argon2';
import { CryptoService } from '../../iface/crypto-service';
import { randomBytes } from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ArgonCryptoService implements CryptoService {
  public async encryptString(
    rawString: string,
    salt?: string,
  ): Promise<string> {
    return await argon2.hash(rawString);
  }

  public async generateSalt(secret?: string): Promise<string> {
    const salt = randomBytes(16).toString('hex');
    return Promise.resolve(salt);
  }

  public async verifyPassword(hash: string, plain: string): Promise<boolean> {
    return await argon2.verify(hash, plain);
  }
}

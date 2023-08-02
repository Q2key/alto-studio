import { ICryptoService } from "../../domain/services/ICryptoService";

import argon2 from 'argon2';

export class CryptoService implements ICryptoService {
    async encryptString (rawString: string, salt?: string): Promise<string> {
        return await argon2.hash(rawString);
    }

    async verifyPassword (hash: string, plain: string): Promise<boolean> {
        return await argon2.verify(hash, plain);
    }
}
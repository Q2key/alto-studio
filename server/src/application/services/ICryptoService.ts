export interface ICryptoService {
    encryptString: (rawString: string, salt?: string) => Promise<string>;
    generateSalt (secret?: string): Promise<string>;
    verifyPassword: (hash: string, plain: string) => Promise<boolean>;
}
import { User } from '../../domain/user/User';
import { ICryptoService } from './ICryptoService';
import { ICreateUserDto } from '../../interface-adapters/dto/user/ICreateUserDto';
import { IUSerService } from './IUserService';
import { CryptoService } from '../../frameworks/external-services/ArgonCryptoService';
import { IUser } from '../../domain/user/IUser';

export class UserService implements IUSerService {
    readonly cryptoService: ICryptoService;

    constructor() {
        this.cryptoService = new CryptoService();
    }
    
    async validateUserPassword(hash: string, plain: string, salt?: string, secret?: string): Promise<boolean> {
        return Promise.resolve(true);
    } ;

    async createUserWithPasswordHash(
        {
            firstName,
            middleName,
            lastName,
            email,
            password,
            role,
        }: ICreateUserDto): Promise<User> {
        const salt = await this.cryptoService.generateSalt();
        const passwordHash = await this.cryptoService
            .encryptString(password, salt);

        const userToCreate = new User(
            firstName,
            middleName,
            lastName,
            email,
            passwordHash, salt,
            role,
            true,
            undefined,
        );

        return userToCreate;
    }


}
import { User } from "../../domain/User/User";
import { ICryptoService } from "./ICryptoService";
import { ICreateUserDto } from "../../dto/user/ICreateUserDto";
import { IUSerService } from "./IUserService";
import { CryptoService } from "../../frameworks/external-services/ArgonCryptoService";

export class UserService implements IUSerService {
    readonly cryptoService: ICryptoService;

    constructor() {
        this.cryptoService = new CryptoService();
    }

    async createUserWithPasswordHash({
        firstName, 
        middleName, 
        lastName, 
        email, 
        password, 
        role,
    }: ICreateUserDto): Promise<User> {
        const passwordHash = await this.cryptoService
            .encryptString(password);

        const userToCreate = new User(
          firstName,
          middleName,
          lastName,
          email,
          passwordHash,
          passwordHash,
          role,
          true,
          undefined
        );

        return userToCreate;
    } 
}
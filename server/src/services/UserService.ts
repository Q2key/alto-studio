import { User } from "../domain/entities/User/User";
import { ICryptoService } from "./ICryptoService";
import { ICreateUserDto } from "../dto/user/ICreateUserDto";
import { CryptoService } from "./CryptoService";
import { IUSerService } from "./IUserService";

export class UserService implements IUSerService {
    readonly cryptoService: ICryptoService;

    constructor() {
        this.cryptoService = new CryptoService();
    }

    async createUserWithPasswordHash(dto: ICreateUserDto): Promise<User> {
        const passwordHash = await this.cryptoService.encryptString(dto.password);

        const userToCreate = new User(
          dto.firstName,
          dto.middleName,
          dto.lastName,
          dto.email,
          passwordHash,
          "",
          dto.role,
          true,
          undefined
        );

        return userToCreate;
    } 
}
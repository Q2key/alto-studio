import { IUser } from "../../domain/user/IUser";
import { ICreateUserDto } from "../../interface-adapters/dto/user/ICreateUserDto";
import { ICryptoService } from "./ICryptoService";

export interface IUSerService {
    cryptoService: ICryptoService;
    createUserWithPasswordHash: (dto: ICreateUserDto) => Promise<IUser>;
    validateUserPassword: (hash: string, plain: string, salt?: string, secret?: string) => Promise<boolean>; 
}
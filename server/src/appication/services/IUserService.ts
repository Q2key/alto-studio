import { IUser } from "../../domain/User/IUser";
import { ICreateUserDto } from "../../interface-adapters/dto/user/ICreateUserDto";
import { ICryptoService } from "./ICryptoService";

export interface IUSerService {
    cryptoService: ICryptoService;
    createUserWithPasswordHash: (dto: ICreateUserDto) => Promise<IUser>;
}
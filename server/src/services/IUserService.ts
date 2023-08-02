import { IUser } from "../domain/entities/User/IUser";
import { ICreateUserDto } from "../dto/user/ICreateUserDto";
import { ICryptoService } from "./ICryptoService";

export interface IUSerService {
    cryptoService: ICryptoService;
    createUserWithPasswordHash: (dto: ICreateUserDto) => Promise<IUser>;
}
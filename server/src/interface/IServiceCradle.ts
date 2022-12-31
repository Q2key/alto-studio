import { DataSource } from "typeorm";
import { ICreateUserInput } from "../domain/use-cases/user/createUser/createUserInput";
import { IUseCase } from ".";
import { IUser } from "../domain/entities/User/IUser";
import { IUserMapper } from "../domain/entities/User/IUserMapper";
import { IUserRepo } from "../domain/entities/User/IUserRepo";

export interface IServiceCradle {
    userRepository: IUserRepo;
    getUsersUseCase: IUseCase<void, IUser[]>;
    createUserUseCase: IUseCase<ICreateUserInput, IUser>;
    dataSource: DataSource;
    userMapper: IUserMapper;
}
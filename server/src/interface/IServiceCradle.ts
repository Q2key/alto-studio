import { DataSource } from "typeorm";
import { ICreateUserInput } from "../domain/use-cases/user/createUser/createUserInput";
import { IUseCase } from ".";
import { IUserEntity } from "../domain/User/IUserEntity";
import { IUserMapper } from "../domain/User/IUserMapper";
import { IUserRepo } from "../domain/User/IUserRepo";

export interface IServiceCradle {
    userRepository: IUserRepo;
    getUsersUseCase: IUseCase<void, IUserEntity[]>;
    createUserUseCase: IUseCase<ICreateUserInput, IUserEntity>;
    dataSource: DataSource;
    userMapper: IUserMapper;
}
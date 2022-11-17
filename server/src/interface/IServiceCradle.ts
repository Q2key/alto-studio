import { DataSource } from "typeorm";
import { ICreateUserInput } from "../domain/use-cases/user/createUser/createUserInput";
import { IUserEntity } from "../domain/User/IUserEntity";
import { IUserMapper } from "../domain/User/IUserMapper";
import { IUseCase, IUserRepo } from ".";

export interface IServiceCradle {
    userRepository: IUserRepo;
    getUsersUseCase: IUseCase<void, IUserEntity[]>;
    createUserUseCase: IUseCase<ICreateUserInput, IUserEntity>;
    dataSource: DataSource;
    userMapper: IUserMapper;
}
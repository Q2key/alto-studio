import { DataSource } from "typeorm";
import { IUserEntity } from "../domain/User/IUserEntity";
import { IUserMapper } from "../domain/User/IUserMapper";

export interface IUseCase<TIn, TOut> {
    execute: (payload: TIn) => Promise<TOut>;
}

export interface IEntity<TIdentity> {
    id: TIdentity;
}

export interface IUserRepo {
    save(user: IUserEntity): Promise<boolean>;
    findOne(id: number): Promise<IUserEntity>;
    find: (fromIndex?: number, count?: number) => Promise<IUserEntity[]>;
    deleteOne: (id: string) => Promise<boolean>;
}

export interface IServiceCradle {
    userRepository: IUserRepo;
    getUsersUseCase: IUseCase<void, IUserEntity[]>;
    dataSource: DataSource;
    userMapper: IUserMapper;
}

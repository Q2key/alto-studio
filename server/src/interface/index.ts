import { GetUsersUseCase } from "../domain/use-cases/user/getUsers/getUsers";
import { User } from "../entity/User";

export interface IUseCase<TIn, TOut> {
    execute: (payload: TIn) => Promise<TOut>;
}

export interface IUserRepo {
    save(user: User): Promise<boolean>;
    findOne(id: number): Promise<User>;
    find: (fromIndex?: number, count?: number) => Promise<User[]>;
    deleteOne: (id: string) => Promise<boolean>;
}

export interface IServiceCradle {
    userRepository: IUserRepo;
    getUsersUseCase: IUseCase<void, User[]>;
    dataSource: boolean;
}

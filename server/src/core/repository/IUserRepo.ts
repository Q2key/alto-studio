import { IUser } from "../entities/User/IUser";
import {UserEntity} from "../../infrastructure/entities/UserEntity";

export interface IUserRepo {
    save(user: IUser): Promise<UserEntity>;
    findOne(id: number): Promise<UserEntity>;
    find: (fromIndex?: number, count?: number) => Promise<UserEntity[]>;
    deleteOne: (id: string) => Promise<boolean>;
}

import { IUser } from "../entities/User/IUser";
import {UserEntity} from "../../infrastructure/entities/UserEntity";

export interface IUserRepo {
    save(user: IUser): Promise<UserEntity>;
    update(id: string, user: IUser): Promise<boolean>;
    findOne(id: string): Promise<UserEntity>;
    find: (fromIndex?: number, count?: number) => Promise<UserEntity[]>;
    deleteOne: (id: string) => Promise<boolean>;
}

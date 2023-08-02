import { IUser } from "../entities/User/IUser";

export interface IUserRepo {
    save(user: IUser): Promise<IUser>;
    update(id: string, user: IUser): Promise<boolean>;
    findOne(id: string): Promise<IUser>;
    find: (fromIndex?: number, count?: number) => Promise<IUser[]>;
    deleteOne: (id: string) => Promise<boolean>;
}

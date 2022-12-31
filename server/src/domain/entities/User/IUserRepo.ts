import { IUser } from "./IUser";

export interface IUserRepo {
    save(user: IUser): Promise<IUser>;
    findOne(id: number): Promise<IUser>;
    find: (fromIndex?: number, count?: number) => Promise<IUser[]>;
    deleteOne: (id: string) => Promise<boolean>;
}

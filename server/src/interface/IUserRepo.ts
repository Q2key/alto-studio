import { IUserEntity } from "../domain/User/IUserEntity";

export interface IUserRepo {
    save(user: IUserEntity): Promise<IUserEntity>;
    findOne(id: number): Promise<IUserEntity>;
    find: (fromIndex?: number, count?: number) => Promise<IUserEntity[]>;
    deleteOne: (id: string) => Promise<boolean>;
}

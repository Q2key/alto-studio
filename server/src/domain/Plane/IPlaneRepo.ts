import { IPlaneEntity } from "./IPlaneEntity";

export interface IUserRepo {
    save(user: IPlaneEntity): Promise<IPlaneEntity>;
    findOne(id: number): Promise<IPlaneEntity>;
    find: (fromIndex?: number, count?: number) => Promise<IPlaneEntity[]>;
    deleteOne: (id: string) => Promise<boolean>;
}
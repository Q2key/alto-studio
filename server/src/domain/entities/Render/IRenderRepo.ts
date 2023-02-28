import { IRender } from "./IRender";

export interface IRenderRepo {
    save(user: IRender): Promise<IRender>;
    findOne(id: number): Promise<IRender>;
    find: (fromIndex?: number, count?: number) => Promise<IRender[]>;
    deleteOne: (id: string) => Promise<boolean>;
}
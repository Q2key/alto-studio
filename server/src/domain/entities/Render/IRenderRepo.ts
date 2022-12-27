import { IRenderEntity } from "./IRender";

export interface IRenderRepo {
    save(user: IRenderEntity): Promise<IRenderEntity>;
    findOne(id: number): Promise<IRenderEntity>;
    find: (fromIndex?: number, count?: number) => Promise<IRenderEntity[]>;
    deleteOne: (id: string) => Promise<boolean>;
}
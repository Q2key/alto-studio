import { IRender } from "./IRender";
import {RenderEntity} from "../../../infrastructure/entities/RenderEntity";

export interface IRenderRepo {
    save(user: IRender): Promise<RenderEntity>;
    findOne(id: number): Promise<RenderEntity>;
    find: (fromIndex?: number, count?: number) => Promise<RenderEntity[]>;
    deleteOne: (id: string) => Promise<boolean>;
}
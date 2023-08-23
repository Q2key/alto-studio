import { IUnitResource } from "./IUnitResource";

export class UnitResource implements IUnitResource {
    id?: string;
    resourceId: string;
    unitId: string;
    type: string;
}
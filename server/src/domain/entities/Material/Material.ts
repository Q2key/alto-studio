import { IMaterial } from "./IMaterial";

export class Material implements IMaterial {
    id?: string;
    name: string;
    description: string;
    resourceId: string;
}
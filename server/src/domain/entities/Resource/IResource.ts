import { IUnit } from "../Unit/IUnit";

export interface IResource {
    id?: string;
    name: string;
    originalName: string;
    mimeType: string;
    type: string;
    size: number;
    src: string;
    available: boolean;
    units?: IUnit[];
}
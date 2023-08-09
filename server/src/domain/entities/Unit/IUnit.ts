import { IResource } from "../Resource/IResource";

export interface IUnit {
    id?: string;
    name: string;
    resources: IResource[];
    description: string;
    text: string;
}
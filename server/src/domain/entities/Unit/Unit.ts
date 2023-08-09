import { IResource } from "../Resource/IResource";
import { IUnit } from "./IUnit";

export class Unit implements IUnit {
    id: string | undefined;
    name: string;
    description: string;
    resources: IResource[];
    text: string;
}
import { IResource } from "../Resource/IResource";
import { IUnit } from "./IUnit";

export class Unit implements IUnit {
    resources: IResource[];
    id: string | undefined;
    name: string;
    description: string;
    text: string;
}
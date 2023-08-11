import { IUnit } from "../Unit/IUnit";

export interface ILesson {
    id?: string;
    name: string;
    units: IUnit[];
    description: string;
}

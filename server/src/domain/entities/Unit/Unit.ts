import { IUnit } from "./IUnit";

export class Unit implements IUnit {
    id?: string;
    name: string;
    lessonId: string;
    description: string;
    text: string;
}
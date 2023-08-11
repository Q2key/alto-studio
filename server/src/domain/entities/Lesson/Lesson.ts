import { IUnit } from "../Unit/IUnit";
import { ILesson } from "./ILesson";


export class Lesson implements ILesson {
    id?: string;
    name: string;
    units: IUnit[];
    description: string;
}
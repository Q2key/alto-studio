import { ILesson } from "../Lesson/ILesson";
import { IUnit } from "./IUnit";

export class Unit implements IUnit {
    id?: string;
    lessonId?: string;
    name: string;
    lesson?: ILesson;
    description: string;
    text: string;
}
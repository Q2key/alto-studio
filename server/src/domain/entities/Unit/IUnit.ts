import { ILesson } from "../Lesson/ILesson";

export interface IUnit {
    id?: string;
    name: string;
    lesson?: ILesson;
    lessonId?: string;
    description: string;
    text: string;
}
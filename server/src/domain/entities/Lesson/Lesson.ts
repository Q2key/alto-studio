import { ILesson } from "./ILesson";


export class Lesson implements ILesson {
    id?: string;
    name: string;
    description: string;
}
import { ILesson } from "../Lesson/ILesson";

export interface ICourse {
    id?: string;
    name: string;
    description: string;
    lessons: ILesson[]
}
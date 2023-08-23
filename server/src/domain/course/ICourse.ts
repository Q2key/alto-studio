import { ILesson } from "../lesson/ILesson";

export interface ICourse {
    id?: string;
    name: string;
    description: string;
    lessons: ILesson[]
}
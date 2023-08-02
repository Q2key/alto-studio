import { ILesson } from "../Lesson/ILesson";
import { ICourse } from "./ICource";

export class Course implements ICourse {
    id?: string;
    name: string;
    description: string;
    lessons: ILesson[];
    
}
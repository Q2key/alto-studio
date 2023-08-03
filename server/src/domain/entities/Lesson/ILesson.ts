import { ILessonResources } from "../LessonResources/ILessonResources";

export interface ILesson {
    id?: string;
    name: string;
    description: string;
    mediaResource: ILessonResources[]
}
import { ILessonResources } from "./ILessonResources";

export class LessonResources implements ILessonResources {
    id?: string;
    resourceId: string;
    name: string;
    description: string;
}
import { ILessonResource } from "./ILessonResource";

export class LessonResource implements ILessonResource {
    resourceId: string;
    id?: string;
    lessonId: string;
    type: string;
}
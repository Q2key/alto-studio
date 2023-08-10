import { ILessonResource } from "./ILessonResource";

export class LessonResource implements ILessonResource {
    id?: string;
    lessonId: string;
    type: string;
}
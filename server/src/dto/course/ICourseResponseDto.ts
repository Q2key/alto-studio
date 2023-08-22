import {ILesson} from "../../domain/Lesson/ILesson";

export interface ICourseResponseDto {
    name: string;
    description: string;
    lessons: ILesson[];
}
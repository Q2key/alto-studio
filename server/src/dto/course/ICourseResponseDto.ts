import {ILesson} from "../../domain/entities/Lesson/ILesson";

export interface ICourseResponseDto {
    name: string;
    description: string;
    lessons: ILesson[];
}
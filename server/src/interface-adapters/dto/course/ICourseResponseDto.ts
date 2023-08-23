import {ILesson} from "../../../domain/lesson/ILesson";

export interface ICourseResponseDto {
    name: string;
    description: string;
    lessons: ILesson[];
}
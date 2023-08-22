import { ILesson } from "../../domain/Lesson/ILesson";
import { ILessonMapper } from "../../appication/mappers/ILessonMapper";
import { ILessonResponseDto } from "../dto/lesson/ILessonResponseDto";

export class LessonMapper implements ILessonMapper
 {
    toDTO(entity: ILesson): ILessonResponseDto {
        return entity as ILessonResponseDto
    }
}
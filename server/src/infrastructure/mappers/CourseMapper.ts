import { ILesson } from "../../domain/entities/Lesson/ILesson";
import { ILessonMapper } from "../../domain/mappers/ILessonMapper";
import { ILessonResponseDto } from "../../dto/lesson/ILessonResponseDto";

export class LessonMapper implements ILessonMapper
 {
    toDTO(entity: ILesson): ILessonResponseDto {
        return entity as ILessonResponseDto
    }
}
import { ILessonResource } from "../../domain/entities/LessonResource/ILessonResource";
import { ILessonResourceMapper } from "../../domain/mappers/ILessonResourceMapper";
import { ILessonResourceResponseDto } from "../../dto/lessonResource/ILessonResourceResponseDto";

export class LessonResourceMapper implements ILessonResourceMapper
 {
    toDTO(entity: ILessonResource): ILessonResourceResponseDto {
        return entity as ILessonResourceResponseDto
    }
}
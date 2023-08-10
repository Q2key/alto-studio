import { IMapper } from "../../abstractions/IMapper";
import { ILessonResourceResponseDto } from "../../dto/lessonResource/ILessonResourceResponseDto";
import { ILessonResource } from "../entities/LessonResource/ILessonResource";

export interface ILessonResourceMapper extends IMapper<ILessonResource, ILessonResourceResponseDto> {
    toDTO(entity: ILessonResource): ILessonResourceResponseDto;
}
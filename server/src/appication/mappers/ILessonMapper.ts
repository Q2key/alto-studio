import { IMapper } from "../abstractions/IMapper";
import { ILessonResponseDto } from "../../interface-adapters/dto/lesson/ILessonResponseDto";
import { ILesson } from "../../domain/Lesson/ILesson";

export interface ILessonMapper extends IMapper<ILesson, ILessonResponseDto> {
    toDTO(entity: ILesson): ILessonResponseDto;
}
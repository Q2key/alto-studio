import { IMapper } from "../../abstractions/IMapper";
import { ILessonResponseDto } from "../../dto/lesson/ILessonResponseDto";
import { ILesson } from "../entities/Lesson/ILesson";

export interface ILessonMapper extends IMapper<ILesson, ILessonResponseDto> {
    toDTO(entity: ILesson): ILessonResponseDto;
}
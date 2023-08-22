import { IMapper } from '../abstractions/IMapper';
import { ICourse } from '../../domain/Course/ICourse';
import { ICourseResponseDto } from '../../dto/course/ICourseResponseDto';

export interface ICourseMapper extends IMapper<ICourse, ICourseResponseDto> {
    toDTO(entity: ICourse): ICourseResponseDto;
}
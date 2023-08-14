import {ICourseMapper} from "../../domain/mappers/ICourseMapper";
import {ICourseResponseDto} from "../../dto/course/ICourseResponseDto";
import {ICourse} from "../../domain/entities/Course/ICourse";

export class CourseMapper implements ICourseMapper
 {
    toDTO(entity: ICourse): ICourseResponseDto {
        return entity as ICourseResponseDto
    }
}
import {ICourseMapper} from "../../application/mappers/ICourseMapper";
import {ICourseResponseDto} from "../dto/course/ICourseResponseDto";
import {ICourse} from "../../domain/course/ICourse";

export class CourseMapper implements ICourseMapper
 {
    toDTO(entity: ICourse): ICourseResponseDto {
        return entity as ICourseResponseDto
    }
}
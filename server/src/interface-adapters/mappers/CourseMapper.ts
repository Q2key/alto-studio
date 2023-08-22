import {ICourseMapper} from "../../appication/mappers/ICourseMapper";
import {ICourseResponseDto} from "../dto/course/ICourseResponseDto";
import {ICourse} from "../../domain/Course/ICourse";

export class CourseMapper implements ICourseMapper
 {
    toDTO(entity: ICourse): ICourseResponseDto {
        return entity as ICourseResponseDto
    }
}
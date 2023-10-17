import { GenericUseCase } from '../../contracts/generic-use-case';
import { CreateCourseDto } from '../../dto/create-course.dto';
import { ICourse } from '../../domain/course/course.domain.interface';
import { Inject, Injectable } from '@nestjs/common';
import { Scope } from '../../contracts/scope';
import { CourseRepository } from '../../infrastructure/repositories/course/course.repository';

@Injectable()
export class CreateCourseUseCase
  implements GenericUseCase<CreateCourseDto, Promise<ICourse>>
{
  constructor(
    @Inject(Scope.COURSE_REPOSITORY) private courseRepository: CourseRepository,
  ) {}

  execute(dto: CreateCourseDto): Promise<ICourse> {
    return Promise.resolve({} as ICourse);
  }
}

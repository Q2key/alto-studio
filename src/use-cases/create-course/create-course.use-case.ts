import { GenericUseCase } from '../generic-use-case';
import { CreateCourseDto } from '../../contracts/dto/create-course.dto';
import { ICourse } from '../../domain/course/course.domain.interface';
import { Inject, Injectable } from '@nestjs/common';
import { InjectionScope } from '../../contracts/types/InjectionScope';
import { CourseRepository } from '../../infrastructure/repositories/course/course.repository';

@Injectable()
export class CreateCourseUseCase
  implements GenericUseCase<CreateCourseDto, Promise<ICourse>>
{
  constructor(
    @Inject(InjectionScope.COURSE_REPOSITORY)
    private courseRepository: CourseRepository,
  ) {}

  async execute(dto: CreateCourseDto): Promise<ICourse> {
    return Promise.resolve({} as ICourse);
  }
}

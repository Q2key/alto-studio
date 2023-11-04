import { GenericUseCase } from '../../contracts/generic-use-case';
import { CreateCourseDto } from '../../contracts/dto/create-course.dto';
import { ICourse } from '../../domain/course/course.domain.interface';
import { Inject, Injectable } from '@nestjs/common';
import { CourseRepository } from '../../infrastructure/repository/course.repository';
import { GenericRepository } from '../../contracts/generic-repository';

@Injectable()
export class CreateCourseUseCase
  implements GenericUseCase<CreateCourseDto, Promise<ICourse>>
{
  constructor(
    @Inject(CourseRepository)
    private courseRepository: GenericRepository<ICourse>,
  ) {}

  async execute(dto: CreateCourseDto): Promise<ICourse> {
    return Promise.resolve({} as ICourse);
  }
}

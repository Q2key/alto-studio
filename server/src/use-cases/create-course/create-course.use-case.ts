import { GenericUseCase } from '../../contracts/generic-use-case';
import { CreateCourseDto } from '../../contracts/dto/create-course.dto';
import { ICourse } from '../../domain/course/course.domain.interface';
import { Injectable } from '@nestjs/common';
import { AbstractCourseRepo } from '../../infrastructure/repository/abstract.repository';

@Injectable()
export class CreateCourseUseCase
  implements GenericUseCase<CreateCourseDto, Promise<ICourse>>
{
  constructor(private repo: AbstractCourseRepo) {}

  async execute(dto: CreateCourseDto): Promise<ICourse> {
    return Promise.resolve({} as ICourse);
  }
}

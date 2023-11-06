import { Injectable } from '@nestjs/common';
import { CreateLessonDto } from '../../contracts/dto/create-lesson.dto';
import { ILesson } from '../../domain/lesson/lesson.domain.interface';
import { GenericUseCase } from '../../contracts/generic-use-case';
import { AbstractLessonRepo } from '../../infrastructure/repository/abstract.repository';

@Injectable()
export class CreateLessonUseCase
  implements GenericUseCase<CreateLessonDto, Promise<ILesson>>
{
  constructor(private repo: AbstractLessonRepo) {}

  async execute(dto: CreateLessonDto): Promise<ILesson> {
    const lesson = dto as ILesson;
    return this.repo.Save(lesson);
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { ILesson } from '../../domain/lesson/lesson.domain.interface';
import { GenericUseCase } from '../../contracts/generic-use-case';
import { LessonRepository } from '../../infrastructure/repository/lesson.repository';
import { GenericRepository } from '../../contracts/generic-repository';

@Injectable()
export class GetLessonsUseCase
  implements GenericUseCase<undefined, Promise<ILesson[]>>
{
  constructor(
    @Inject(LessonRepository)
    private lessonRepository: GenericRepository<ILesson>,
  ) {}

  async execute(): Promise<ILesson[]> {
    return this.lessonRepository.FindAll();
  }
}

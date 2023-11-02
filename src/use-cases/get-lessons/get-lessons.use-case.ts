import { Inject, Injectable } from '@nestjs/common';
import { ILesson } from '../../domain/lesson/lesson.domain.interface';
import { GenericUseCase } from '../../contracts/generic-use-case';
import { LessonRepository } from '../../infrastructure/repository/lesson/lesson.repository';
import { InjectionScope } from '../../contracts/types/InjectionScope';

@Injectable()
export class GetLessonsUseCase
  implements GenericUseCase<undefined, Promise<ILesson[]>>
{
  constructor(
    @Inject(InjectionScope.LESSON_REPOSITORY)
    private lessonRepository: LessonRepository,
  ) {}

  async execute(): Promise<ILesson[]> {
    return this.lessonRepository.FindAll();
  }
}

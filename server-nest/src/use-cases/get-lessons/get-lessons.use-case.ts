import { Inject, Injectable } from '@nestjs/common';
import { ILesson } from '../../domain/lesson/lesson.domain.interface';
import { GenericUseCase } from '../../contracts/generic-use-case';
import { LessonRepository } from '../../infrastructure/database/repositories/lesson/lesson.repository';
import { Scope } from '../../contracts/scope';

@Injectable()
export class GetLessonsUseCase
  implements GenericUseCase<undefined, Promise<ILesson[]>>
{
  constructor(
    @Inject(Scope.LESSON_REPOSITORY) private lessonRepository: LessonRepository,
  ) {}

  async execute(): Promise<ILesson[]> {
    return this.lessonRepository.FindAll();
  }
}

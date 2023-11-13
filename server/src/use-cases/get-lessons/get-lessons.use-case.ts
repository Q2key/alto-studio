import { Injectable } from '@nestjs/common';
import { ILesson } from '../../domain/lesson/lesson.domain.interface';
import { GenericUseCase } from '../../contracts/generic-use-case';
import { AbstractLessonRepo } from '../../infrastructure/abs/abstract.repository';

@Injectable()
export class GetLessonsUseCase
  implements GenericUseCase<undefined, Promise<ILesson[]>>
{
  constructor(private lessonRepository: AbstractLessonRepo) {}

  async execute(): Promise<ILesson[]> {
    return this.lessonRepository.FindAll();
  }
}

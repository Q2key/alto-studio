import { Inject, Injectable } from '@nestjs/common';
import { ILesson } from '../../domain/lesson/lesson.domain.interface';
import { GenericUseCase } from '../../contracts/generic-use-case';
import { GenericRepository } from '../../contracts/generic-repository';
import { IocTokens } from '../../contracts/IocTokens';

@Injectable()
export class GetLessonsUseCase
  implements GenericUseCase<undefined, Promise<ILesson[]>>
{
  constructor(
    @Inject(IocTokens.LESSON_REPOSITORY)
    private lessonRepository: GenericRepository<ILesson>,
  ) {}

  async execute(): Promise<ILesson[]> {
    return this.lessonRepository.FindAll();
  }
}

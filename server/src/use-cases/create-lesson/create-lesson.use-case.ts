import { Inject, Injectable } from '@nestjs/common';
import { CreateLessonDto } from '../../contracts/dto/create-lesson.dto';
import { ILesson } from '../../domain/lesson/lesson.domain.interface';
import { GenericUseCase } from '../../contracts/generic-use-case';
import { GenericRepository } from '../../contracts/generic-repository';
import { IocTokens } from '../../contracts/IocTokens';

@Injectable()
export class CreateLessonUseCase
  implements GenericUseCase<CreateLessonDto, Promise<ILesson>>
{
  constructor(
    @Inject(IocTokens.LESSON_REPOSITORY)
    private lessonRepository: GenericRepository<ILesson>,
  ) {}

  async execute(dto: CreateLessonDto): Promise<ILesson> {
    const lesson = dto as ILesson;
    return this.lessonRepository.Save(lesson);
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { CreateLessonDto } from '../../dto/create-lesson.dto';
import { ILesson } from '../../domain/lesson/lesson.domain.interface';
import { GenericUseCase } from '../../contracts/generic-use-case';
import { LessonRepository } from '../../infrastructure/database/repositories/lesson/lesson.repository';
import { Scope } from '../../contracts/scope';

@Injectable()
export class CreateLessonUseCase
  implements GenericUseCase<CreateLessonDto, Promise<ILesson>>
{
  constructor(
    @Inject(Scope.LESSON_REPOSITORY) private lessonRepository: LessonRepository,
  ) {}

  async execute(dto: CreateLessonDto): Promise<ILesson> {
    const lesson = dto as ILesson;
    return this.lessonRepository.Save(lesson);
  }
}

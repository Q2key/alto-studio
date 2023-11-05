import { Inject, Injectable } from '@nestjs/common';
import { CreateLessonDto } from '../../contracts/dto/create-lesson.dto';
import { ILesson } from '../../domain/lesson/lesson.domain.interface';
import { GenericUseCase } from '../../contracts/generic-use-case';
import { LessonRepository } from '../../infrastructure/repository/lesson.repository';

@Injectable()
export class CreateLessonUseCase
  implements GenericUseCase<CreateLessonDto, Promise<ILesson>>
{
  constructor(
    @Inject(LessonRepository)
    private lessonRepository: LessonRepository,
  ) {}

  async execute(dto: CreateLessonDto): Promise<ILesson> {
    const lesson = dto as ILesson;
    return this.lessonRepository.Save(lesson);
  }
}

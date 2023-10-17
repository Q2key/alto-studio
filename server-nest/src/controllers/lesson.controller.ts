import { Body, Controller, Get, Post } from '@nestjs/common';
import { GetLessonsUseCase } from '../use-cases/get-lessons/get-lessons.use-case';
import { CreateLessonUseCase } from '../use-cases/create-lesson/create-lesson.use-case';
import { CreateLessonDto } from '../contracts/dto/create-lesson.dto';
import { ILesson } from '../domain/lesson/lesson.domain.interface';

@Controller('lesson')
export class LessonController {
  constructor(
    private getLessonsUseCase: GetLessonsUseCase,
    private createLessonUseCase: CreateLessonUseCase,
  ) {}
  @Get()
  async findAll(): Promise<ILesson[]> {
    return await this.getLessonsUseCase.execute();
  }

  @Post()
  async post(@Body() createCatDto: CreateLessonDto): Promise<ILesson> {
    return await this.createLessonUseCase.execute(createCatDto);
  }
}

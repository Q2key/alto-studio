import { Body, Controller, Post } from '@nestjs/common';
import { CreateCourseUseCase } from '../use-cases/create-course/create-course.use-case';
import { CreateCourseDto } from '../dto/create-course.dto';
import { ICourse } from '../domain/course/course.domain.interface';

@Controller('course')
export class LessonController {
  constructor(private createCourseUseCase: CreateCourseUseCase) {}

  @Post()
  async post(@Body() createCourseDto: CreateCourseDto): Promise<ICourse> {
    return await this.createCourseUseCase.execute(createCourseDto);
  }
}

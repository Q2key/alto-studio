import { Module } from '@nestjs/common';
import { TypeormDataSourceProvider } from '../data-source/typeorm-data-source.provider';
import { UserRepository } from '../repository/user.repository';
import { CourseRepository } from '../repository/course.repository';
import { LessonRepository } from '../repository/lesson.repository';

@Module({
  providers: [
    UserRepository,
    CourseRepository,
    LessonRepository,
    TypeormDataSourceProvider,
  ],
  exports: [
    UserRepository,
    CourseRepository,
    LessonRepository,
    TypeormDataSourceProvider,
  ],
})
export class DatabaseModule {}

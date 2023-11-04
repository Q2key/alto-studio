import { Module } from '@nestjs/common';
import { DataSourceProvider } from '../data-source/data-source.provider';
import { UserRepository } from '../repository/user.repository';
import { CourseRepository } from '../repository/course.repository';
import { LessonRepository } from '../repository/lesson.repository';

@Module({
  providers: [
    UserRepository,
    CourseRepository,
    LessonRepository,
    DataSourceProvider,
  ],
  exports: [
    UserRepository,
    CourseRepository,
    LessonRepository,
    DataSourceProvider,
  ],
})
export class DatabaseModule {}

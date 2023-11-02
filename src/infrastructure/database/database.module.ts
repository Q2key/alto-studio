import { Module } from '@nestjs/common';
import { UserRepositoryProvider } from '../repository/user/user.repository.provider';
import { DataSourceProvider } from './data-source/data-source.provider';
import { LessonRepositoryProvider } from '../repository/lesson/lesson.repository.provider';
import { CourseRepositoryProvider } from '../repository/course/course.repository.provider';

@Module({
  providers: [
    UserRepositoryProvider,
    CourseRepositoryProvider,
    LessonRepositoryProvider,
    DataSourceProvider,
  ],
  exports: [
    UserRepositoryProvider,
    CourseRepositoryProvider,
    LessonRepositoryProvider,
    DataSourceProvider,
  ],
})
export class DatabaseModule {}

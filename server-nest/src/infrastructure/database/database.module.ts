import { Module } from '@nestjs/common';
import { UserRepositoryProvider } from './repositories/user/user.repository.provider';
import { DataSourceProvider } from './data-source/data-source.provider';
import { LessonRepositoryProvider } from './repositories/lesson/lesson.repository.provider';

@Module({
  providers: [
    UserRepositoryProvider,
    LessonRepositoryProvider,
    DataSourceProvider,
  ],
  exports: [
    UserRepositoryProvider,
    LessonRepositoryProvider,
    DataSourceProvider,
  ],
})
export class DatabaseModule {}

import { Scope } from '../../../contracts/scope';
import { DataSource } from 'typeorm';
import { LessonRepository } from './lesson.repository';

export const LessonRepositoryProvider = {
  provide: Scope.LESSON_REPOSITORY,
  useFactory: (dataSource: DataSource) => new LessonRepository(dataSource),
  inject: [Scope.DATA_SOURCE],
};

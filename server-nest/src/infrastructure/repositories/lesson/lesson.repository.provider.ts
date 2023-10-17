import { InjectionScope } from '../../../contracts/types/InjectionScope';
import { DataSource } from 'typeorm';
import { LessonRepository } from './lesson.repository';

export const LessonRepositoryProvider = {
  provide: InjectionScope.LESSON_REPOSITORY,
  useFactory: (dataSource: DataSource) => new LessonRepository(dataSource),
  inject: [InjectionScope.DATA_SOURCE],
};

import { InjectionScope } from '../../../contracts/types/InjectionScope';
import { DataSource } from 'typeorm';
import { CourseRepository } from './course.repository';

export const CourseRepositoryProvider = {
  provide: InjectionScope.COURSE_REPOSITORY,
  useFactory: (dataSource: DataSource) => new CourseRepository(dataSource),
  inject: [InjectionScope.DATA_SOURCE],
};

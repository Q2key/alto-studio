import { Scope } from '../../../contracts/scope';
import { DataSource } from 'typeorm';
import { CourseRepository } from './course.repository';

export const CourseRepositoryProvider = {
  provide: Scope.COURSE_REPOSITORY,
  useFactory: (dataSource: DataSource) => new CourseRepository(dataSource),
  inject: [Scope.DATA_SOURCE],
};

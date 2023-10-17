import { ILesson } from '../lesson/lesson.domain.interface';
import { ICourse } from './course.domain.interface';

export class CourseDomain implements ICourse {
  id?: string;
  name: string;
  description: string;
  lessons: ILesson[];
}

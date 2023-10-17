import { ILesson } from '../lesson/ILesson';
import { CourseDomainInterface } from './course.domain.interface';

export class CourseDomain implements CourseDomainInterface {
  id?: string;
  name: string;
  description: string;
  lessons: ILesson[];
}

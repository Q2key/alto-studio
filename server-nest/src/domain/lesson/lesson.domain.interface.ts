import { ICourse } from '../course/course.domain.interface';
import { IUnit } from '../unit/unit.domain.interface';

export interface ILesson {
  id?: string;
  name: string;
  units: IUnit[];
  course?: ICourse;
  description: string;
}

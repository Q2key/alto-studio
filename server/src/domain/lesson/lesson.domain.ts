import { ILesson } from './lesson.domain.interface';
import { IUnit } from '../unit/unit.domain.interface';

export class Lesson implements ILesson {
  id?: string;
  name: string;
  units: IUnit[];
  description: string;
}

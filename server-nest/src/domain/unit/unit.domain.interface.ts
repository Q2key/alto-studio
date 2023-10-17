import { IUnitResource } from '../unit-resource/unit-resource.domain.interface';
import { ILesson } from '../lesson/lesson.domain.interface';

export interface IUnit {
  id?: string;
  name: string;
  lesson?: ILesson;
  unitResources: IUnitResource[];
  description: string;
  text: string;
}

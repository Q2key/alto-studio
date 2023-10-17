import { IUnit } from './unit.domain.interface';
import { IUnitResource } from '../unit-resource/unit-resource.domain.interface';
import { ILesson } from '../lesson/ILesson';

export class Unit implements IUnit {
  id?: string;
  name: string;
  description: string;
  text: string;
  lesson: ILesson;
  unitResources: IUnitResource[];
}

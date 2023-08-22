import { IUnit } from "./IUnit";
import { IUnitResource } from '../UnitResource/IUnitResource';
import { ILesson } from '../Lesson/ILesson';

export class Unit implements IUnit {
    id?: string;
    name: string;
    description: string;
    text: string;
    lesson: ILesson;
    unitResources: IUnitResource[];
}
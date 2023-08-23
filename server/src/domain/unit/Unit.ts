import { IUnit } from "./IUnit";
import { IUnitResource } from '../unit-resource/IUnitResource';
import { ILesson } from '../lesson/ILesson';

export class Unit implements IUnit {
    id?: string;
    name: string;
    description: string;
    text: string;
    lesson: ILesson;
    unitResources: IUnitResource[];
}
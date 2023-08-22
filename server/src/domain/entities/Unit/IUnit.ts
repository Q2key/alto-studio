import { ILesson } from "../Lesson/ILesson";
import { IUnitResource } from "../UnitResource/IUnitResource";
import { IResource } from "../Resource/IResource";

export interface IUnit {
    id?: string;
    name: string;
    lesson?: ILesson;
    unitResources: IUnitResource[];
    description: string;
    text: string;
}
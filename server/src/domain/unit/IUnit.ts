import { ILesson } from "../lesson/ILesson";
import { IUnitResource } from "../unit-resource/IUnitResource";
import { IResource } from "../resource/IResource";

export interface IUnit {
    id?: string;
    name: string;
    lesson?: ILesson;
    unitResources: IUnitResource[];
    description: string;
    text: string;
}
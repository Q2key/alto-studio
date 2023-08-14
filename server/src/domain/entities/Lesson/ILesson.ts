import { IUnit } from "../Unit/IUnit";
import { ICourse } from '../Course/ICourse';

export interface ILesson {
    id?: string;
    name: string;
    units: IUnit[];
    course?: ICourse;
    description: string;
}

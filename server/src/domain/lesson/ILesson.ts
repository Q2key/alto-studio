import { IUnit } from "../unit/IUnit";
import { ICourse } from '../course/ICourse';

export interface ILesson {
    id?: string;
    name: string;
    units: IUnit[];
    course?: ICourse;
    description: string;
}

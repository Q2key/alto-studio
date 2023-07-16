import { IProject } from './IProject';
import {ProjectEntity} from "../../../infrastructure/entities/ProjectEntity";

export interface IProjectRepo {
    save(user: IProject): Promise<ProjectEntity>;
    findOne(id: number): Promise<ProjectEntity>;
    find: (fromIndex?: number, count?: number) => Promise<ProjectEntity[]>;
    deleteOne: (id: string) => Promise<boolean>;
}
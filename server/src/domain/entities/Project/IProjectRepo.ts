import { IProject } from './IProject';

export interface IProjectRepo {
    save(user: IProject): Promise<IProject>;
    findOne(id: number): Promise<IProject>;
    find: (fromIndex?: number, count?: number) => Promise<IProject[]>;
    deleteOne: (id: string) => Promise<boolean>;
}
import { IEntity } from '../IEntity';

export interface IProject extends IEntity<string> {
    name: string;
    userId: string;
    startedAt?: string;
    finishedAt?: string;
}


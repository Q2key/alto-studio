import { IProject } from "./IProject";

export class Project implements IProject {
    readonly id: string;
    userId: string;
    name: string;
    startedAt?: string;
    finishedAt?: string;

    constructor(userId: string, name: string, startedAt?: string, finishedAt?: string) {
        this.userId = userId;
        this.name = name;
        this.startedAt = startedAt;
        this.finishedAt = finishedAt;
    }

    static Create(userId: string, name: string, startedAt?: string, finishedAt?: string): Project {
        return new Project(userId, name, startedAt, finishedAt);
    }
}
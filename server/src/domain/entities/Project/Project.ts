import { IProject } from "./IProject";

export class Project implements IProject {
    readonly id: string;
    userId: string;
    name: string;
    startedAt: string;
    finishedAt: string;

    constructor(id: string, userId: string, name: string, startedAt: string, finishedAt: string) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.startedAt = startedAt;
        this.finishedAt = finishedAt;
    }

    static Create(id: string, userId: string, name: string, startedAt: string, finishedAt: string): Project {
        return new Project(id, userId, name, startedAt, finishedAt);
    }
}
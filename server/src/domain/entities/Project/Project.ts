import {IProject} from "./IProject";

export class Project implements IProject{
    name: string;
    userId: string;
    constructor(
        name: string,
        userId: string,
    ) {
        this.name = name;
        this.userId = userId;
    }
}
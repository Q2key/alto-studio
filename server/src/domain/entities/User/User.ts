
import { IProject } from "../Project/IProject";
import { IUser } from "./IUser";

export class User implements IUser {
    readonly id: string;
    readonly firstName: string;
    projects: IProject[];

    constructor(id: string, firstName: string, projects: IProject[]) {
        this.id = id;
        this.firstName = firstName;
        this.projects = projects;
    }

    public static Create(id: string, firstName: string, projects: IProject[] = []): User {
        return new User(id, firstName, projects);
    }
}

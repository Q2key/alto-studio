
import { IProject } from "../Project/IProject";

export interface IUser  {
    id?: string;
    firstName: string;
    projects?: IProject[];
}

import { IProject } from "../Project/IProject";

export interface IUser  {
    firstName: string;
    projects?: IProject[];
}
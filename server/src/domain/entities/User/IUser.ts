import { IEntity } from "../IEntity";
import { IProject } from "../Project/IProject";

export interface IUser extends IEntity<string> {
    firstName: string;
    projects?: IProject[];
}

export interface IUserDto extends IUser {

}
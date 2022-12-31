import { IEntity } from "../IEntity";

export interface IUser extends IEntity<string> {
    firstName: string;
}

export interface IUserDto extends IUser {

}
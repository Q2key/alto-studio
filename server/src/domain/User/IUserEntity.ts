import { IEntity } from "../IEntity";

export interface IUserEntity extends IEntity<string> {
    firstName: string;
}

export interface IUserDto extends IUserEntity {

}
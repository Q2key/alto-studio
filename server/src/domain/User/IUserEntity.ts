import { IEntity } from "../../interface";

export interface IUserEntity extends IEntity<string> {
    firstName: string;
}

export interface IUserDto extends IUserEntity {

}
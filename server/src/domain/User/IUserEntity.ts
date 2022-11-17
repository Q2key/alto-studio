import { IEntity } from "../../interface";

export interface IUserProps {
    firstName: string;
}

export interface IUserEntity extends IEntity<string> {
    id: string;
}

export interface IUserDto extends IUserEntity {

}
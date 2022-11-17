import { IEntity } from "../IEntity";

export interface IPlaneEntity extends IEntity<string> {
    name: string;
}

export interface IPlaneDto extends IPlaneEntity {

}
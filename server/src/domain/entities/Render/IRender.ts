import { IEntity } from "../IEntity";

export interface IRenderEntity extends IEntity<string> {
    name: string;
}

export interface IRenderDto extends IRenderEntity {

}
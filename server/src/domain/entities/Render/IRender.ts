import { IEntity } from "../IEntity";

export interface IRender extends IEntity<string> {
    name: string;
    src: string;
    meta: string;
}

export interface IRenderDto extends IRender {

}
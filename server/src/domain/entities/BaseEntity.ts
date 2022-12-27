import { IEntity } from "./IEntity";

export class BaseEntity implements IEntity<string> {
    id: string;
    constructor(id: string) {
        this.id = id;
    }
}
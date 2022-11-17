import { BaseEntity } from "../BaseEntity";

export class Plane extends BaseEntity {
    name: string;
    constructor(id: string, name: string) {
        super(id);
        this.name = name;
    }

    public static Create(id: string, name: string): Plane {
        return new Plane(id, name);
    }
}
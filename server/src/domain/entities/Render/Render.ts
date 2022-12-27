import { BaseEntity } from "../BaseEntity";

export class Render extends BaseEntity {
    name: string;
    constructor(id: string, name: string) {
        super(id);
        this.name = name;
    }

    public static Create(id: string, name: string): Render {
        return new Render(id, name);
    }
}
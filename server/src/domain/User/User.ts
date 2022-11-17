import { BaseEntity } from "../BaseEntity";

export class User extends BaseEntity {
    readonly firstName: string;

    constructor(id: string, firstName: string) {
        super(id);
        this.firstName = firstName;
    }

    public static Create(id: string, firstName: string): User {
        return new User(id, firstName);
    }
}

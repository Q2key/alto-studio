import { IUserEntity } from "./IUserEntity";

export class User implements IUserEntity {
    readonly id: string;
    readonly firstName: string;

    constructor(id: string, firstName: string) {
        this.id = id;
        this.firstName = firstName;
    }

    public static Create(id: string, firstName: string): User {
        return new User(id, firstName);
    }
}

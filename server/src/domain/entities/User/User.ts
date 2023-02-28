
import { IUser } from "./IUser";

export class User implements IUser {
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

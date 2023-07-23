import {IUser} from "./IUser";
import {IUserRole} from "../UserRole/IUserRole";

export class User implements IUser {
    firstName: string;
    role: IUserRole;

    constructor(
        firstName: string,
        role: IUserRole,
    ) {
        this.firstName = firstName;
        this.role = role;
    }

    static Create(
        firstName: string,
        role: IUserRole,
    ): User {
        return new User(firstName, role);
    }
}
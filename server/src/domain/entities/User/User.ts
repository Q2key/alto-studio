import { IUser } from "./IUser";
import { UserRoles } from "../UserRole/IUserRole";

export class User implements IUser {
    readonly id?: string;
    firstName: string;
    role: UserRoles;

    constructor(
        firstName: string,
        role: UserRoles,
    ) {
        this.firstName = firstName;
        this.role = role;
    }
}
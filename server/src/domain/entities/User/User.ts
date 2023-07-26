import { UserRoles } from "../../../dto/types/UserRoles";
import { IUser } from "./IUser";

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
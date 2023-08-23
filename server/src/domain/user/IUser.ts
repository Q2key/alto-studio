import { UserRoles} from "../user-role/IUserRole";

export interface IUser  {
    readonly id: string | undefined;
    firstName: string;
    middleName: string | undefined;
    lastName: string;
    email: string;
    passwordHash: string;
    salt: string;
    role: UserRoles;
    active: boolean;
    blockedAt: string | undefined;
}
import { UserRoles } from "../../domain/UserRole/IUserRole";

export interface ICreateUserDto {
    id?: string;
    firstName: string;
    lastName: string;
    middleName?:string;
    email: string;
    password: string;
    role: UserRoles;
}
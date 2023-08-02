import { UserRoles } from "../../domain/entities/UserRole/IUserRole";

export interface ICreateUserDto {
    id?: string;
    firstName: string;
    lastName: string;
    middleName?:string;
    email: string;
    password: string;
    role: UserRoles;
}
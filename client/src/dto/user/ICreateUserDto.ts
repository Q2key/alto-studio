import { UserRoles } from "../../domain/typeorm-entities/UserRole/IUserRole";

export interface ICreateUserDto {
    id?: string;
    firstName: string;
    lastName: string;
    middleName?:string;
    email: string;
    password: string;
    role: UserRoles;
}
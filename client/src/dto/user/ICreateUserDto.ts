import { UserRoles } from "../../core/typeorm-entities/use-cases-role/IUserRole";

export interface ICreateUserDto {
    id?: string;
    firstName: string;
    lastName: string;
    middleName?:string;
    email: string;
    password: string;
    role: UserRoles;
}
import { UserRoles } from "../../domain/entities/UserRole/IUserRole";

export interface ICreateUserDto {
    id?: string;
    firstName: string;
    role: UserRoles;
}
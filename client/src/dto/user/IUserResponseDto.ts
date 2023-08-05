import { UserRoles } from "../types/UserRoles";


export interface IUserResponseDto {
    readonly id?: string;
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    role: UserRoles;
}
import { UserRoles } from "../types/UserRoles";


export interface IUserResponseDto {
    readonly id?: string;
    firstName: string;
    role: UserRoles;
}
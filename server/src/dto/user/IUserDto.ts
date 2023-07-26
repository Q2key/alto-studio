
import { IProjectDto } from "../project/IProjectDto";
import { UserRoles } from "../types/UserRoles";


export interface IUserDto {
    readonly id?: string;
    firstName: string;
    role: UserRoles;
    projects?: IProjectDto[];
}
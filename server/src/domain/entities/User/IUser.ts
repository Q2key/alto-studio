
import { IProject } from "../Project/IProject";
import { UserRoles} from "../UserRole/IUserRole";

export interface IUser  {
    readonly id?: string;
    firstName: string;
    role: UserRoles;
    projects?: IProject[];
}
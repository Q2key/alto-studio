import { IUser } from "../../../domain/User/IUser";
import { ICreateUserDto } from "./ICreateUserDto";

export interface IUpdateUserDto {
    id: string;
    user: Omit<Partial<IUser>, 'id'>;
}
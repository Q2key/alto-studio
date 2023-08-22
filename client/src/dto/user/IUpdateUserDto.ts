import { IUser } from "../../domain/typeorm-entities/User/IUser";
import { ICreateUserDto } from "./ICreateUserDto";

export interface IUpdateUserDto {
    id: string;
    user: Omit<Partial<IUser>, 'id'>;
}
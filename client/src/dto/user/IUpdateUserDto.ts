import { IUser } from "../../domain/typeorm-entities/user/UserInterface";
import { ICreateUserDto } from "./ICreateUserDto";

export interface IUpdateUserDto {
    id: string;
    user: Omit<Partial<IUser>, 'id'>;
}
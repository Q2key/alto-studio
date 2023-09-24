import { IUser } from "../../domain/typeorm-entities/use-cases/UserInterface";
import { ICreateUserDto } from "./ICreateUserDto";

export interface IUpdateUserDto {
    id: string;
    user: Omit<Partial<IUser>, 'id'>;
}
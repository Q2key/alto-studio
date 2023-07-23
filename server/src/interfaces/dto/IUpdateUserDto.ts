import { ICreateUserDto } from "./ICreateUserDto";

type IUpdateUserPayload = Omit<ICreateUserDto, 'id'>;

export interface IUpdateUserDto {
    id: string;
    user: IUpdateUserPayload;
}
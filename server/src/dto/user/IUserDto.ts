import { IUser } from "../../domain/entities/User/IUser";
export interface IUserDto extends Omit<IUser, 'id'> {

}
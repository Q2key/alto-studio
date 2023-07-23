
import { IUser } from "../../domain/entities/User/IUser";
import { IUserDto } from "../dto/IUserDto";
import { IUserMapper } from "./IUserMapper";

export class UserMapper implements IUserMapper {
    toDTO({id, ...rest}: IUser): IUserDto {
        return {
            ...rest
        };
    }
}
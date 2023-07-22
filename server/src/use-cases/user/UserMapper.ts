import { IUserDto } from "../../core/dto/IUserDto";
import { IUser } from "../../core/entities/User/IUser";
import { IUserMapper } from "../../core/mapper/IUserMapper";

export class UserMapper implements IUserMapper {
    toDTO(entity: IUser): IUserDto {
        return entity as IUserDto;
    }
}
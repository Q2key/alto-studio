import { IUser, IUserDto } from "../../domain/entities/User/IUser";
import { IUserMapper } from "../../domain/entities/User/IUserMapper";

export class UserMapper implements IUserMapper {
    toDTO(entity: IUser): IUserDto {
        return entity as IUserDto;
    }
}
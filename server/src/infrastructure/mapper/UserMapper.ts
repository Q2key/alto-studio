import { User } from "../../domain/User/User";
import { IUserDto } from "../../domain/User/IUserDto";
import { IUserMapper } from "../../domain/User/IUserMapper";

export class UserMapper implements IUserMapper {
    toDTO(entity: User): IUserDto {
        return entity as IUserDto;
    }
}
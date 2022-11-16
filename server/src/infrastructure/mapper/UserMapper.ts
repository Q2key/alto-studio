import { IUserMapper } from "../../domain/User/IUserMapper";
import { IUserDto, IUserEntity } from "../../domain/User/IUserEntity";

export class UserMapper implements IUserMapper {
    toDTO(entity: IUserEntity): IUserDto {
        return entity as IUserDto;
    }
}
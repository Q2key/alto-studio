
import { IMapper } from "../../infrastructure/mapper/IMapper";
import { IUserDto } from "./IUserDto";
import { User } from "./User";

export interface IUserMapper extends IMapper<User, IUserDto> {
    toDTO(entity: User): IUserDto;
}

import { UserEntity } from "../../infrastructure/entities/UserEntity";
import { IUserDto } from "../dto/user/IUserDto";
import {IMapper} from "./IMapper";

export interface IUserMapper extends IMapper<UserEntity, IUserDto> {
    toDTO(entity: UserEntity): IUserDto;
}

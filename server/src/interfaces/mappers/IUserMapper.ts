

import { IUser } from "../../domain/entities/User/IUser";
import { UserEntity } from "../../infrastructure/entities/UserEntity";
import { IUserDto } from "../dto/IUserDto";
import {IMapper} from "./IMapper";


export interface IUserMapper extends IMapper<IUser, IUserDto> {
    toDTO(entity: UserEntity): IUserDto;
}
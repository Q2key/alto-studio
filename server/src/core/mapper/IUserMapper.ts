import { IMapper } from "../../infrastructure/mapper/IMapper";
import { IUser } from "../entities/User/IUser";
import {UserEntity} from "../../infrastructure/entities/UserEntity";
import { IUserDto } from "../dto/IUserDto";


export interface IUserMapper extends IMapper<IUser, IUserDto> {
    toDTO(entity: UserEntity): IUserDto;
}
import { IMapper } from "../../../infrastructure/mapper/IMapper";
import { IUser } from "./IUser";
import {UserEntity} from "../../../infrastructure/entities/UserEntity";
import {IUserDto} from "../../../infrastructure/dto";


export interface IUserMapper extends IMapper<IUser, IUserDto> {
    toDTO(entity: UserEntity): IUserDto;
}
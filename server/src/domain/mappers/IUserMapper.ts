import { IUserDto } from "../../dto/user/IUserDto";
import {IMapper} from "../../abstractions/IMapper";
import {IUser} from "../entities/User/IUser";

export interface IUserMapper extends IMapper<IUser, IUserDto> {
    toDTO(entity: IUser): IUserDto;
    toDomain(dto: IUserDto): IUser;
}

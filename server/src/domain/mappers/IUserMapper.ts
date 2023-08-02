import { IUserResponseDto } from "../../dto/user/IUserResponseDto";
import {IMapper} from "../../abstractions/IMapper";
import {IUser} from "../entities/User/IUser";

export interface IUserMapper extends IMapper<IUser, IUserResponseDto> {
    toDTO(domain: IUser): IUserResponseDto;
}

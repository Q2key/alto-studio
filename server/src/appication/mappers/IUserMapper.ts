import { IUserResponseDto } from "../../interface-adapters/dto/user/IUserResponseDto";
import {IMapper} from "../abstractions/IMapper";
import {IUser} from "../../domain/user/IUser";

export interface IUserMapper extends IMapper<IUser, IUserResponseDto> {
    toDTO(domain: IUser): IUserResponseDto;
}

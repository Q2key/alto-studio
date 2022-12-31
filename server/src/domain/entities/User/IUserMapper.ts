import { IMapper } from "../../../infrastructure/mapper/IMapper";
import { IUser, IUserDto } from "./IUser";


export interface IUserMapper extends IMapper<IUser, IUserDto> {
    toDTO(entity: IUser): IUserDto;
}
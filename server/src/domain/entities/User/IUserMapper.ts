
import { IMapper } from "../../infrastructure/mapper/IMapper";
import { IUserEntity, IUserDto } from "./IUser";

export interface IUserMapper extends IMapper<IUserEntity, IUserDto> {
    toDTO(entity: IUserEntity): IUserDto;
}
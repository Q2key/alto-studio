
import { IUserDto } from "../../dto/user/IUserDto";
import { IUserMapper } from "../../domain/mappers/IUserMapper";
import {UserEntity} from "../entities/UserEntity";
import {IUser} from "../../domain/entities/User/IUser";

export class UserMapper implements IUserMapper {
    toDTO(entity: UserEntity): IUserDto {
        return {
            firstName: entity.firstName,
            role: entity.role,
            projects: entity.projects,
        }
    }

    toDomain(dto: IUserDto): IUser {
        return undefined;
    }

}
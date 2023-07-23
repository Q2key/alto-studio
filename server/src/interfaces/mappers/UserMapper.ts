
import { IUserDto } from "../dto/user/IUserDto";
import { IUserMapper } from "./IUserMapper";
import {UserEntity} from "../../infrastructure/entities/UserEntity";

export class UserMapper implements IUserMapper {
    toDTO(entity: UserEntity): IUserDto {
        return {
            firstName: entity.firstName,
            role: entity.role,
            projects: entity.projects,
        }
    }

}
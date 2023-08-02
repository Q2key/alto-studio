
import { User } from "../../domain/entities/User/User";
import { IUserMapper } from "../../domain/mappers/IUserMapper";
import { IUserDto } from "../../dto/user/IUserDto";

export class UserMapper implements IUserMapper {
    toDTO(entity: User): IUserDto {
        return {
            id: entity.id,
            firstName: entity.firstName,
            role: entity.role,
        }
    }

    toDomain(dto: IUserDto): User {
        return new User(
            dto.firstName, 
            'middleName', 
            'lastName', 
            'a@.com', 
            'passwordHash', 
            'salt', 
            dto.role, 
            true, 
            undefined);
    }
}
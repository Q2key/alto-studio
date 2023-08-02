
import { User } from "../../domain/entities/User/User";
import { IUserMapper } from "../../domain/mappers/IUserMapper";
import { IUserResponseDto } from "../../dto/user/IUserResponseDto";

export class UserMapper implements IUserMapper {
    toDTO(domain: User): IUserResponseDto {
        return {
            id: domain.id,
            firstName: domain.firstName,
            role: domain.role,
        }
    }
}
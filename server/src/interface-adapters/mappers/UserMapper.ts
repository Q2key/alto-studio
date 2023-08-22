
import { User } from "../../domain/User/User";
import { IUserMapper } from "../../appication/mappers/IUserMapper";
import { IUserResponseDto } from "../../dto/user/IUserResponseDto";

export class UserMapper implements IUserMapper {
    toDTO(domain: User): IUserResponseDto {
        return {
            id: domain.id,
            firstName: domain.firstName,
            lastName: domain.lastName,
            middleName: domain.middleName,
            email: domain.email,
            role: Number(domain.role),   
        }
    }
}
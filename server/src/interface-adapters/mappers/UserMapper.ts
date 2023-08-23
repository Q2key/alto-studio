
import { User } from "../../domain/user/User";
import { IUserMapper } from "../../application/mappers/IUserMapper";
import { IUserResponseDto } from "../dto/user/IUserResponseDto";

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
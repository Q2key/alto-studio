import { UserRoles } from "../../domain/entities/UserRole/IUserRole";

export interface ICreateSubscriptionDto {
    name: string;
    available: boolean;
    description: string;
}
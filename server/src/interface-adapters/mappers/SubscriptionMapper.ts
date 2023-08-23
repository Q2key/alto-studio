import { ISubscriptionMapper } from "../../application/mappers/ISubscriptionMapper";
import { ISubscriptionDto } from "../dto/subscription/ISubscriptionDto";
import { Subscription } from "../../domain/subscription/Subscription";

export class SubscriptionMapper implements ISubscriptionMapper {
    toDTO({ id, userId, ...rest }: Subscription): ISubscriptionDto {
        return rest;
    }
}
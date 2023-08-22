import { ISubscriptionMapper } from "../../appication/mappers/ISubscriptionMapper";
import { ISubscriptionDto } from "../../dto/subscription/ISubscriptionDto";
import { Subscription } from "../../domain/Subscription/Subscription";

export class SubscriptionMapper implements ISubscriptionMapper {
    toDTO({ id, userId, ...rest }: Subscription): ISubscriptionDto {
        return rest;
    }
}
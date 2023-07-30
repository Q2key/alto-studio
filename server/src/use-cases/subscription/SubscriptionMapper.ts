import { ISubscriptionMapper } from "../../domain/mappers/ISubscriptionMapper";
import { ISubscriptionDto } from "../../dto/subscription/ISubscriptionDto";
import { Subscription } from "../../domain/entities/Subscription/Subscription";

export class SubscriptionMapper implements ISubscriptionMapper {
    toDTO({ id, ...rest }: Subscription): ISubscriptionDto {
        return rest;
    }

    toDomain(data: ISubscriptionDto): Subscription {
        return new Subscription(
            data.name, 
            data.description, 
            data.available, 
            data.expiredAt, 
            data.startedAt, 
            data.price, 
            data.features, 
            data.durationKind, 
            data.billingCycleKind);
    }
}
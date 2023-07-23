import { ISubscriptionMapper } from "../../domain/mappers/ISubscriptionMapper";
import { ISubscriptionDto } from "../../dto/subscription/ISubscriptionDto";
import { Subscription } from "../../domain/entities/Subscription/Subscription";

export class SubscriptionMapper implements ISubscriptionMapper {
    toDTO({ id, ...rest }: Subscription): ISubscriptionDto {
        return rest;
    }

    toDomain(dto: ISubscriptionDto): Subscription {
        return new Subscription(dto.name, dto.available, dto.description);
    }
}
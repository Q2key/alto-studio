import {ISubscriptionMapper} from "../../domain/mappers/ISubscriptionMapper";
import {ISubscriptionDto} from "../../dto/subscription/ISubscriptionDto";
import {SubscriptionEntity} from "../entities/SubscriptionEntity";
import {ISubscription} from "../../domain/entities/Subscription/ISubscription";

export class SubscriptionMapper implements ISubscriptionMapper {
    toDTO({id, ...rest}: SubscriptionEntity): ISubscriptionDto {
        return {
            ...rest
        };
    }

    toDomain(dto: ISubscriptionDto): ISubscription {
        return undefined;
    }
}
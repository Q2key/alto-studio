import {ISubscriptionMapper} from "./ISubscriptionMapper";
import {ISubscribtionDto} from "../../dto/subscription/ISubscribtionDto";
import {SubscriptionEntity} from "../../../infrastructure/entities/SubscriptionEntity";

export class SubscriptionMapper implements ISubscriptionMapper {
    toDTO({id, ...rest}: SubscriptionEntity): ISubscribtionDto {
        return {
            ...rest
        };
    }
}
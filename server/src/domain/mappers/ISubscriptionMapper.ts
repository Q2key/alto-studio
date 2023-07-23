import {IMapper} from "../../abstractions/IMapper";
import {ISubscriptionDto} from "../../dto/subscription/ISubscriptionDto";
import {SubscriptionEntity} from "../../infrastructure/entities/SubscriptionEntity";
import {ISubscription} from "../entities/Subscription/ISubscription";


export interface ISubscriptionMapper extends IMapper<ISubscription, ISubscriptionDto> {
    toDTO(entity: ISubscription): ISubscriptionDto;
    toDomain(dto: ISubscriptionDto): ISubscription;
}

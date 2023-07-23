import { IMapper } from "../../abstractions/IMapper";
import { ISubscriptionDto } from "../../dto/subscription/ISubscriptionDto";
import { ISubscription } from "../entities/Subscription/ISubscription";


export interface ISubscriptionMapper extends IMapper<ISubscription, ISubscriptionDto> {
    toDTO(entity: ISubscription): ISubscriptionDto;
    toDomain(dto: ISubscriptionDto): ISubscription;
}

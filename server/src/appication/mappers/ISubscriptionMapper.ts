import { IMapper } from "../abstractions/IMapper";
import { ISubscriptionDto } from "../../dto/subscription/ISubscriptionDto";
import { ISubscription } from "../../domain/Subscription/ISubscription";


export interface ISubscriptionMapper extends IMapper<ISubscription, ISubscriptionDto> {
    toDTO(entity: ISubscription): ISubscriptionDto;
}

import { IMapper } from "../abstractions/IMapper";
import { ISubscriptionDto } from "../../interface-adapters/dto/subscription/ISubscriptionDto";
import { ISubscription } from "../../domain/subscription/ISubscription";


export interface ISubscriptionMapper extends IMapper<ISubscription, ISubscriptionDto> {
    toDTO(entity: ISubscription): ISubscriptionDto;
}
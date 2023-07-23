import {IMapper} from "./IMapper";
import {ISubscribtionDto} from "../dto/subscription/ISubscribtionDto";
import {SubscriptionEntity} from "../../infrastructure/entities/SubscriptionEntity";


export interface ISubscriptionMapper extends IMapper<SubscriptionEntity, ISubscribtionDto> {
    toDTO(entity: SubscriptionEntity): ISubscribtionDto;
}

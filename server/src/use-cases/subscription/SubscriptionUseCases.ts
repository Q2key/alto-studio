import {ISubscriptionRepo} from "../../domain/repository/ISubscriptionRepo";
import {ISubscriptionMapper} from "../../interfaces/mappers/subscription/ISubscriptionMapper";
import {IServiceCradle} from "../../abstractions";
import {ISubscribtionDto} from "../../interfaces/dto/subscription/ISubscribtionDto";
import {ICreateSubscriptionDto} from "../../interfaces/dto/subscription/ICreateSubscriptionDto";
import {IUpdateSubscriptionDto} from "../../interfaces/dto/subscription/IUpdateSubscriptionDto";
import {IDeleteSubscriptionDto} from "../../interfaces/dto/subscription/IDeleteSubscriptionDto";

export class SubscriptionUseCases {
    private readonly repo: ISubscriptionRepo;
    private readonly mapper: ISubscriptionMapper;

    constructor(cradle: IServiceCradle) {
        this.repo = cradle.subscriptionRepository;
        this.mapper = cradle.subscriptionMapper;
    }

    public async getAll(): Promise<ISubscribtionDto[]> {
        const subscriptions = await this.repo.find();
        return subscriptions.map(this.mapper.toDTO);
    }

    public async create({name, description, available}: ICreateSubscriptionDto): Promise<ISubscribtionDto> {
        const user = await this.repo.save({name, available, description});
        return Promise.resolve(this.mapper.toDTO(user));
    }

    public async update({id, subscription}: IUpdateSubscriptionDto): Promise<boolean> {
        const updated = await this.repo.update(id, {...subscription});
        return Promise.resolve(updated);
    }

    public async deleteUser({id}: IDeleteSubscriptionDto): Promise<boolean> {
        const deleted = await this.repo.deleteOne(id);
        return Promise.resolve(deleted);
    }
}
import {ISubscriptionRepo} from "../../domain/repository/ISubscriptionRepo";
import {ISubscriptionMapper} from "../../domain/mappers/ISubscriptionMapper";
import {IServiceCradle} from "../../abstractions";
import {ISubscriptionDto} from "../../dto/subscription/ISubscriptionDto";
import {ICreateSubscriptionDto} from "../../dto/subscription/ICreateSubscriptionDto";
import {IUpdateSubscriptionDto} from "../../dto/subscription/IUpdateSubscriptionDto";
import {IDeleteSubscriptionDto} from "../../dto/subscription/IDeleteSubscriptionDto";

export class SubscriptionUseCases {
    private readonly repo: ISubscriptionRepo;
    private readonly mapper: ISubscriptionMapper;

    constructor(cradle: IServiceCradle) {
        this.repo = cradle.subscriptionRepository;
        this.mapper = cradle.subscriptionMapper;
    }

    public async getAll(): Promise<ISubscriptionDto[]> {
        const subscriptions = await this.repo.find();
        return subscriptions.map(this.mapper.toDTO);
    }

    public async create(dto: ICreateSubscriptionDto): Promise<ISubscriptionDto> {
        const user = await this.repo.save(this.mapper.toDomain(dto));
        return Promise.resolve(this.mapper.toDTO(user));
    }

    public async update({id, subscription}: IUpdateSubscriptionDto): Promise<boolean> {
        const updated = await this.repo.update(id, this.mapper.toDomain(subscription));
        return Promise.resolve(updated);
    }

    public async deleteUser({id}: IDeleteSubscriptionDto): Promise<boolean> {
        const deleted = await this.repo.deleteOne(id);
        return Promise.resolve(deleted);
    }
}
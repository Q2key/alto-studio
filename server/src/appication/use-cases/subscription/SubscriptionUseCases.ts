import { ISubscriptionRepo } from "../../repository/ISubscriptionRepo";
import { ISubscriptionMapper } from "../../mappers/ISubscriptionMapper";
import { IServiceCradle } from "../../abstractions";
import { ISubscriptionDto } from "../../../interface-adapters/dto/subscription/ISubscriptionDto";
import { ICreateSubscriptionDto } from "../../../interface-adapters/dto/subscription/ICreateSubscriptionDto";
import { IUpdateSubscriptionDto } from "../../../interface-adapters/dto/subscription/IUpdateSubscriptionDto";
import { IDeleteSubscriptionDto } from "../../../interface-adapters/dto/subscription/IDeleteSubscriptionDto";
import { IUserRepo } from "../../repository/IUserRepo";
import { Subscription } from "../../../domain/Subscription/Subscription";

export class SubscriptionUseCases {
    private readonly repo: ISubscriptionRepo;
    private readonly userRepo: IUserRepo;
    private readonly mapper: ISubscriptionMapper;

    constructor(cradle: IServiceCradle) {
        this.repo = cradle.subscriptionRepository;
        this.userRepo = cradle.userRepository;
        this.mapper = cradle.subscriptionMapper;
    }

    public async getAll(): Promise<ISubscriptionDto[]> {
        const subscriptions = await this.repo.find();
        return subscriptions.map(this.mapper.toDTO);
    }

    public async create(dto: ICreateSubscriptionDto): Promise<ISubscriptionDto> {

        const user = await this.userRepo.findOne(dto.userId);

        const subscription = new Subscription(
           dto.name,
            user,
            dto.description,
            dto.available,
            dto.expiredAt,
            dto.startedAt,
            dto.price,
            dto.features,
            dto.durationKind,
            dto.billingCycleKind,
        )

        const UserDB = await this.repo.save(subscription);
        return Promise.resolve(this.mapper.toDTO(UserDB));
    }

    public async update({ id, subscription }: IUpdateSubscriptionDto): Promise<boolean> {
        const subscriptionToUpdate = await this.repo.findOne(id);
        const updated = await this.repo.update(id, {...subscriptionToUpdate, ...subscription});
        return Promise.resolve(updated);
    }

    public async deleteUser({ id }: IDeleteSubscriptionDto): Promise<boolean> {
        const deleted = await this.repo.deleteOne(id);
        return Promise.resolve(deleted);
    }
}
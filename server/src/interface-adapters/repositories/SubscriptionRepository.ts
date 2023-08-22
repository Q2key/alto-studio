import { DataSource, Repository } from "typeorm";
import { IServiceCradle } from "../../appication/abstractions";
import { ISubscriptionRepo } from "../../appication/repository/ISubscriptionRepo";
import { SubscriptionDB } from "../../frameworks/typeorm-entities/SubscriptionDB";
import { Subscription } from "../../domain/Subscription/Subscription";

export class SubscriptionRepository implements ISubscriptionRepo {
    private readonly ds: DataSource;
    private repo: Repository<SubscriptionDB>

    constructor({ dataSource }: IServiceCradle) {
        this.ds = dataSource;
        this.repo = this.ds.getRepository(SubscriptionDB);
    }

    async save(subscription: Subscription): Promise<SubscriptionDB> {
        const created = await this.repo.save<Subscription>(subscription);
        return Promise.resolve(created);
    }

    async update(id: string, subscription: Subscription): Promise<boolean> {
        const created = await this.repo.update(id, subscription);
        return Promise.resolve(created.affected > 0);
    }

    async find(fromIndex = 0, count = Number.MAX_VALUE): Promise<SubscriptionDB[]> {
        const users = await this.repo.find();
        return Promise.resolve(users)
    };

    async findOne(id: string): Promise<SubscriptionDB> {
        const subscription = await this.repo.findOneBy({ id: id });
        return Promise.resolve(subscription)
    }

    async deleteOne(id: string): Promise<boolean> {
        const deleted = await this.repo.delete(id);
        return Promise.resolve(deleted.affected > 0);
    }
}
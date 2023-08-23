import { DataSource, Repository } from "typeorm";
import { IUserRepo } from "../../appication/repository/IUserRepo";
import { IServiceCradle } from "../../appication/abstractions";
import { UserDB } from "../../frameworks/typeorm-entities/UserDB";
import { User } from "../../domain/user/User";

export class UserRepository implements IUserRepo {
    private readonly ds: DataSource;
    private repo: Repository<UserDB>

    constructor({ dataSource }: IServiceCradle) {
        this.ds = dataSource;
        this.repo = this.ds.getRepository(UserDB);
    }

    async save(user: User): Promise<UserDB> {
        const created = await this.repo.save<User>(user);
        return Promise.resolve(created);
    }

    async update(id: string, user: User): Promise<boolean> {
        const created = await this.repo.update(id, {id, firstName: user.firstName });
        return Promise.resolve(created.affected > 0);
    }

    async find(fromIndex = 0, count = Number.MAX_VALUE): Promise<UserDB[]> {
        const users = await this.repo.find();
        return Promise.resolve(users)
    };

    async findOne(id: string): Promise<UserDB> {
        const user = await this.repo.findOneBy({id: id});
        return Promise.resolve(user)
    }

    async deleteOne(id: string): Promise<boolean> {
        const deleted = await this.repo.delete(id);
        return Promise.resolve(deleted.affected > 0);
    }

}
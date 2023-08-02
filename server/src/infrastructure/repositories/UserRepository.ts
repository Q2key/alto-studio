import { DataSource, Repository } from "typeorm";
import { IUserRepo } from "../../domain/repository/IUserRepo";
import { IServiceCradle } from "../../abstractions";
import { UserEntity } from "../entities/UserEntity";
import { User } from "../../domain/entities/User/User";

export class UserRepository implements IUserRepo {
    private readonly ds: DataSource;
    private repo: Repository<UserEntity>

    constructor({ dataSource }: IServiceCradle) {
        this.ds = dataSource;
        this.repo = this.ds.getRepository(UserEntity);
    }

    async save(user: User): Promise<UserEntity> {
        const created = await this.repo.save<User>(user);
        return Promise.resolve(created);
    }

    async update(id: string, user: User): Promise<boolean> {
        const created = await this.repo.update(id, {id, firstName: user.firstName });
        return Promise.resolve(created.affected > 0);
    }

    async find(fromIndex = 0, count = Number.MAX_VALUE): Promise<UserEntity[]> {
        // const users = await this.repo.find({relations: {projects: true }});
        const users = await this.repo.find();
        return Promise.resolve(users)
    };

    async findOne(id: string): Promise<UserEntity> {
        const user = await this.repo.findOneBy({id: id});
        return Promise.resolve(user)
    }

    async deleteOne(id: string): Promise<boolean> {
        const deleted = await this.repo.delete(id);
        return Promise.resolve(deleted.affected > 0);
    }

}
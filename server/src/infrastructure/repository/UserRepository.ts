import { DataSource, Repository } from "typeorm";
import { IUser } from "../../domain/entities/User/IUser";
import { IUserRepo } from "../../domain/entities/User/IUserRepo";
import { IServiceCradle } from "../../interface";
import { UserEntity } from "../entities/UserEntity";

export class UserRepository implements IUserRepo {
    private readonly ds: DataSource;
    private repo: Repository<UserEntity>

    constructor({ dataSource }: IServiceCradle) {
        this.ds = dataSource;
        this.repo = this.ds.getRepository(UserEntity);
    }

    deleteOne: (id: string) => Promise<boolean>;

    async save(user: IUser): Promise<UserEntity> {
        const created = await this.repo.save<IUser>(user);
        return Promise.resolve(created);
    }

    async findOne(id: number): Promise<UserEntity> {
        throw ('not implemented');
    }

    async find(fromIndex = 0, count = Number.MAX_VALUE): Promise<UserEntity[]> {
        const users = await this.repo.find({relations: {projects: true }});
        return Promise.resolve(users)
    };
}
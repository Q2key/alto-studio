import { DataSource, Repository } from "typeorm";
import { IUserEntity } from "../../domain/User/IUserEntity";
import { IServiceCradle, IUserRepo } from "../../interface";
import { UserEntity } from "../entities/UserEntity";

export class UserRepository implements IUserRepo {
    private readonly ds: DataSource;
    private repo: Repository<UserEntity>

    constructor({ dataSource }: IServiceCradle) {
        this.ds = dataSource;
        this.repo = this.ds.getRepository(UserEntity);
    }

    deleteOne: (id: string) => Promise<boolean>;

    async save(user: IUserEntity): Promise<IUserEntity> {
        const created = await this.repo.save<IUserEntity>(user);
        return Promise.resolve(created);
    }

    async findOne(id: number): Promise<IUserEntity> {
        return Promise.resolve({ id: '', firstName: '' });
    }

    async find(fromIndex = 0, count = Number.MAX_VALUE): Promise<IUserEntity[]> {
        const users = await this.repo.find();
        return Promise.resolve(users)
    };


}
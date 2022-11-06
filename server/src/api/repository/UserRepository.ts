import { DataSource, Repository } from "typeorm";
import { User } from "../../entity/User";
import { IServiceCradle, IUserRepo } from "../../interface";

export class UserRepository implements IUserRepo {
    private readonly service: IServiceCradle;
    private readonly ds: DataSource;
    private repo: Repository<User>

    constructor({ dataSource }: IServiceCradle) {
        this.ds = dataSource;
        this.repo = this.ds.getRepository(User);
    }

    async save(user: User): Promise<boolean> {
        return Promise.resolve(true);
    }

    async findOne(id: number): Promise<User> {
        return Promise.resolve({ id: 1, firstName: '' });
    }

    async find(fromIndex = 0, count = 999999): Promise<User[]> {
        const users = await this.repo.find();
        return Promise.resolve(users)
    };

    async deleteOne(id: string): Promise<boolean> {
        return Promise.resolve(true);
    };

}
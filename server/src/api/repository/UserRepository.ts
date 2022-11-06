import { User } from "../../entity/User";
import { IServiceCradle, IUserRepo } from "../../interface";

export class UserRepository implements IUserRepo {
    public readonly service: IServiceCradle;
    constructor(service: IServiceCradle) {
        this.service = service;
    }

    save(user: User): Promise<boolean> {
        return Promise.resolve(true);
    }

    findOne(id: number): Promise<User> {
        return Promise.resolve({ id: 1, firstName: '' });
    }

    find(fromIndex = 0, count = 999999): Promise<User[]> {
        return Promise.resolve([])
    };

    deleteOne(id: string): Promise<boolean> {
        return Promise.resolve(true);
    };

}
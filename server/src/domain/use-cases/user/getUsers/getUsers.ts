import { User } from "../../../../entity/User";
import { IServiceCradle, IUseCase, IUserRepo } from "../../../../interface";

export class GetUsersUseCase implements IUseCase<void, User[]> {
    public readonly repo: IUserRepo;

    constructor({ userRepository }: IServiceCradle) {
        this.repo = userRepository;
    }

    public execute = async (): Promise<User[]> => {
        const users = await this.repo.find();
        return Promise.resolve(users)
    }
}
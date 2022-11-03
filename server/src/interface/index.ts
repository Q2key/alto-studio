import { User } from "../entity/User";

export interface IUserRepo {
    FindAll: () => Promise<User[]>
}

export interface IServiceCradle {
    userRepository: IUserRepo;
}

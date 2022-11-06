import { User } from "../../../../entity/User";
import { IUseCase } from "../../../../interface";

export class GetUsersUseCase implements IUseCase<void, User[]> {
    public execute = (): Promise<User[]> => {
        return Promise.resolve([])
    }
}
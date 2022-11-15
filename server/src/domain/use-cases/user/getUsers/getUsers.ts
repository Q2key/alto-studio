import { IUserDto } from "../../../User/IUserDto";
import { IServiceCradle, IUseCase, IUserRepo } from "../../../../interface";
import { IUserMapper } from "../../../User/IUserMapper";

export class GetUsersUseCase implements IUseCase<void, IUserDto[]> {
    private readonly repo: IUserRepo;
    private readonly mapper: IUserMapper;

    constructor({ userRepository, userMapper }: IServiceCradle) {
        this.repo = userRepository;
        this.mapper = userMapper;
    }

    public execute = async (): Promise<IUserDto[]> => {
        const users = await this.repo.find();
        return Promise.resolve(users.map(this.mapper.toDTO))
    }
}
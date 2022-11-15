import { IMapper } from "../../../../infrastructure/mapper/IMapper";
import { IUserDto } from "../../../User/IUserDto";
import { IUserMapper } from "../../../../dto/IUserMapper";
import { IServiceCradle, IUseCase, IUserRepo } from "../../../../interface";

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
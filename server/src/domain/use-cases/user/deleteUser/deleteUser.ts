import { IUseCase, IServiceCradle } from "../../../../interface";
import { IUserDto } from "../../../entities/User/IUser";
import { IUserMapper } from "../../../entities/User/IUserMapper";
import { IUserRepo } from "../../../entities/User/IUserRepo";

export class GetUsersUseCase implements IUseCase<void, IUserDto[]> {
    private readonly repo: IUserRepo;
    private readonly mapper: IUserMapper;

    constructor({ userRepository, userMapper }: IServiceCradle) {
        this.repo = userRepository;
        this.mapper = userMapper;
    }

    public execute = async (): Promise<IUserDto[]> => {
        throw ('not implemented')
    }
}
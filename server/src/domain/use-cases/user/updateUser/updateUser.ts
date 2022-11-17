import { IServiceCradle, IUseCase } from "../../../../interface";
import { IUserDto } from "../../../User/IUserEntity";
import { IUserMapper } from "../../../User/IUserMapper";
import { IUserRepo } from "../../../User/IUserRepo";

export class UpdateUsersUseCase implements IUseCase<void, IUserDto[]> {
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
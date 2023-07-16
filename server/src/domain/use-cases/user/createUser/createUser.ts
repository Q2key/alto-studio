import { IUseCase, IServiceCradle } from "../../../../interface";
import { IUserDto } from "../../../entities/User/IUser";
import { IUserMapper } from "../../../entities/User/IUserMapper";
import { IUserRepo } from "../../../entities/User/IUserRepo";
import { User } from "../../../entities/User/User";
import { ICreateUserInput } from "./createUserInput";

export class CreateUsersUseCase implements IUseCase<ICreateUserInput, IUserDto> {
    private readonly repo: IUserRepo;
    private readonly mapper: IUserMapper;

    constructor({ userRepository, userMapper }: IServiceCradle) {
        this.repo = userRepository;
        this.mapper = userMapper;
    }

    public execute = async ({ id, firstName }: ICreateUserInput): Promise<IUserDto> => {
        const user = await this.repo.save(User.Create(id, firstName));
        return Promise.resolve(this.mapper.toDTO(user))
    }
}
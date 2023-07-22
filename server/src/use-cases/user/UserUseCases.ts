import { IServiceCradle } from "../../abstractions";
import { ICreateUserDto } from "../../core/dto/ICreateUserDto";
import { IUserDto } from "../../core/dto/IUserDto";
import { IUserMapper } from "../../core/mapper/IUserMapper";
import { IUserRepo } from "../../core/repository/IUserRepo";

export class UserUseCases {
    private readonly repo: IUserRepo;
    private readonly mapper: IUserMapper;

    constructor(cradle: IServiceCradle) {
        this.repo = cradle.userRepository;
        this.mapper = cradle.userMapper;
    }

    public async getAll(): Promise<IUserDto[]> {
        return (await this.repo.find()).map(this.mapper.toDTO);
    }

    public async createNew({id, firstName}: ICreateUserDto): Promise<IUserDto> {
        const user = await this.repo.save({firstName});
        return Promise.resolve(this.mapper.toDTO(user));
    }

    public async deleteUser({id, firstName}: ICreateUserDto): Promise<boolean> {
        const deleted = await this.repo.deleteOne(id);
        return Promise.resolve(deleted);
    }

    public async updateUser({id, firstName}: ICreateUserDto): Promise<IUserDto> {
        const user = await this.repo.save({firstName});
        return Promise.resolve(this.mapper.toDTO(user));
    }
}
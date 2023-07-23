import { IServiceCradle } from "../../abstractions";
import { ICreateUserDto } from "../../dto/user/ICreateUserDto";
import { IUserDto } from "../../dto/user/IUserDto";
import { IUserRepo } from "../../domain/repository/IUserRepo";
import { IUserMapper } from "../../domain/mappers/IUserMapper";
import { IDeleteUserDto } from "../../dto/user/IDeleteUserDto";
import { IUpdateUserDto } from "../../dto/user/IUpdateUserDto";

export class UserUseCases {
    private readonly repo: IUserRepo;
    private readonly mapper: IUserMapper;

    constructor(cradle: IServiceCradle) {
        this.repo = cradle.userRepository;
        this.mapper = cradle.userMapper;
    }

    public async getAll(): Promise<IUserDto[]> {
        const users = await this.repo.find();
        return users.map(this.mapper.toDTO);
    }

    public async create(dto: ICreateUserDto): Promise<IUserDto> {
        const user = await this.repo.save(this.mapper.toDomain(dto));
        return Promise.resolve(this.mapper.toDTO(user));
    }

    public async update(dto: IUpdateUserDto): Promise<boolean> {
        const updated = await this.repo.update(dto.id, this.mapper.toDomain(dto.user));
        return Promise.resolve(updated);
    }

    public async deleteUser({id}: IDeleteUserDto): Promise<boolean> {
        const deleted = await this.repo.deleteOne(id);
        return Promise.resolve(deleted);
    }
}
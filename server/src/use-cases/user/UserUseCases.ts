import { IServiceCradle } from "../../abstractions";
import { ICreateUserDto } from "../../interfaces/dto/user/ICreateUserDto";
import { IUserDto } from "../../interfaces/dto/user/IUserDto";
import { IUserRepo } from "../../domain/repository/IUserRepo";
import { IUserMapper } from "../../interfaces/mappers/user/IUserMapper";
import { IDeleteUserDto } from "../../interfaces/dto/user/IDeleteUserDto";
import { IUpdateUserDto } from "../../interfaces/dto/user/IUpdateUserDto";

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

    public async create({id, firstName, role}: ICreateUserDto): Promise<IUserDto> {
        const user = await this.repo.save({firstName, role });
        return Promise.resolve(this.mapper.toDTO(user));
    }

    public async update({id, user}: IUpdateUserDto): Promise<boolean> {
        const updated = await this.repo.update(id, {...user});
        return Promise.resolve(updated);
    }

    public async deleteUser({id}: IDeleteUserDto): Promise<boolean> {
        const deleted = await this.repo.deleteOne(id);
        return Promise.resolve(deleted);
    }
}
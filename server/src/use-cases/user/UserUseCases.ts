import { IServiceCradle } from "../../abstractions";
import { ICreateUserDto } from "../../dto/user/ICreateUserDto";
import { IUserResponseDto } from "../../dto/user/IUserResponseDto";
import { IUserRepo } from "../../domain/repository/IUserRepo";
import { IUserMapper } from "../../domain/mappers/IUserMapper";
import { IDeleteUserDto } from "../../dto/user/IDeleteUserDto";
import { IUpdateUserDto } from "../../dto/user/IUpdateUserDto";
import { User } from "../../domain/entities/User/User";
import { ICryptoService } from "../../domain/services/ICryptoService";
import { CryptoService } from "../../infrastructure/services/CryptoService";
import { IUser } from "../../domain/entities/User/IUser";

export class UserUseCases {
    private readonly repo: IUserRepo;
    private readonly mapper: IUserMapper;
    private cryptoService: ICryptoService;

    constructor(cradle: IServiceCradle) {
        this.repo = cradle.userRepository;
        this.mapper = cradle.userMapper;

        this.cryptoService = new CryptoService();
    }

    public async getAll(): Promise<IUserResponseDto[]> {
        const users = await this.repo.find();
        return users.map(this.mapper.toDTO);
    }

    public async create(dto: ICreateUserDto): Promise<IUserResponseDto> {
        const passwordHash = await this.cryptoService.encryptString(dto.password);
        const userToCreate = new User(dto.firstName, dto.middleName, dto.lastName, dto.email, passwordHash, '', dto.role, true, undefined)

        const user = await this.repo.save(userToCreate);
        return Promise.resolve(this.mapper.toDTO(user));
    }

    public async update(dto: IUpdateUserDto): Promise<boolean> {
        const updated = await this.repo.update(dto.id, dto.user as IUser);
        return Promise.resolve(updated);
    }

    public async deleteUser({id}: IDeleteUserDto): Promise<boolean> {
        const deleted = await this.repo.deleteOne(id);
        return Promise.resolve(deleted);
    }
}
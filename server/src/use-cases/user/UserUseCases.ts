import { IServiceCradle } from "../../abstractions";
import { ICreateUserDto } from "../../dto/user/ICreateUserDto";
import { IUserResponseDto } from "../../dto/user/IUserResponseDto";
import { IUserRepo } from "../../domain/repository/IUserRepo";
import { IUserMapper } from "../../domain/mappers/IUserMapper";
import { IDeleteUserDto } from "../../dto/user/IDeleteUserDto";
import { IUpdateUserDto } from "../../dto/user/IUpdateUserDto";
import { User } from "../../domain/entities/User/User";
import { ICryptoService } from "../../services/ICryptoService";
import { CryptoService } from "../../services/CryptoService";
import { IUser } from "../../domain/entities/User/IUser";
import { UserService } from "../../services/UserService";

export class UserUseCases {
  private readonly repo: IUserRepo;
  private readonly mapper: IUserMapper;
  private userService: UserService;

  constructor(cradle: IServiceCradle) {
    this.repo = cradle.userRepository;
    this.mapper = cradle.userMapper;

    this.userService = new UserService();
  }

  public async getAll(): Promise<IUserResponseDto[]> {
    const users = await this.repo.find();
    return users.map(this.mapper.toDTO);
  }

  public async create(dto: ICreateUserDto): Promise<IUserResponseDto> {
    const userToCreate = await this.userService.createUserWithPasswordHash(dto);
    const user = await this.repo.save(userToCreate);
    return Promise.resolve(this.mapper.toDTO(user));
  }

  public async update(dto: IUpdateUserDto): Promise<boolean> {
    const updated = await this.repo.update(dto.id, dto.user as IUser);
    return Promise.resolve(updated);
  }

  public async deleteUser({ id }: IDeleteUserDto): Promise<boolean> {
    const deleted = await this.repo.deleteOne(id);
    return Promise.resolve(deleted);
  }
}

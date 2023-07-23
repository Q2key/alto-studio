import { IServiceCradle } from "../../abstractions";
import { ICreateProjectDto } from "../../interfaces/dto/ICreateProjectDto";
import { IProjectDto } from "../../interfaces/dto/IProjectDto";
import { IProjectRepo } from "../../domain/repository/IProjectRepo";
import { IProjectMapper } from "../../interfaces/mappers/IProjectMapper";

export class ProjectUseCases {
    private readonly repo: IProjectRepo;
    private readonly mapper: IProjectMapper;

    constructor(cradle: IServiceCradle) {
        this.repo = cradle.projectRepository;
        this.mapper = cradle.projectMapper;
    }

    public async getAll(): Promise<IProjectDto[]> {
        return (await this.repo.find()).map(this.mapper.toDTO);
    }

    public async createNew({id, firstName, userId}: ICreateProjectDto): Promise<IProjectDto> {
        const user = await this.repo.save({name: firstName, userId});
        return Promise.resolve(this.mapper.toDTO(user));
    }

    public async deleteUser({id}: ICreateProjectDto): Promise<boolean> {
        const deleted = await this.repo.deleteOne(id);
        return Promise.resolve(deleted);
    }

    public async updateUser({id, firstName, userId}: ICreateProjectDto): Promise<IProjectDto> {
        const user = await this.repo.save({name: firstName, userId});
        return Promise.resolve(this.mapper.toDTO(user));
    }
}
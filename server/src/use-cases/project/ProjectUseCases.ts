import { IServiceCradle } from "../../abstractions";
import { ICreateProjectDto } from "../../dto/project/ICreateProjectDto";
import { IProjectDto } from "../../dto/project/IProjectDto";
import { IProjectRepo } from "../../domain/repository/IProjectRepo";
import { IProjectMapper } from "../../domain/mappers/IProjectMapper";

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

    public async createNew(dto: ICreateProjectDto): Promise<IProjectDto> {
        const user = await this.repo.save(dto);
        return Promise.resolve(this.mapper.toDTO(user));
    }
}
import { IServiceCradle } from '../../abstractions/IServiceCradle';
import { ILessonMapper } from '../../domain/mappers/ILessonMapper';
import { IUnitMapper } from '../../domain/mappers/IUnitMapper';
import { ILessonRepository } from '../../domain/repository/ILessonRepo';
import { IResourceRepository } from '../../domain/repository/IResourceRepo';
import { IUnitRepository } from '../../domain/repository/IUnitRepo';
import { ICreateLessonDto } from '../../dto/lesson/ICreateLessonDto';
import { ILessonResponseDto } from '../../dto/lesson/ILessonResponseDto';
import { ICreateUnitDto } from '../../dto/unit/ICreateUnitDto';
import { IUnitResponseDto } from '../../dto/unit/IUnitResponseDto';

export class UnitUseCases {
    private readonly repo: IUnitRepository;
    private readonly mapper: IUnitMapper;

    constructor(cradle: IServiceCradle) {
        this.repo = cradle.lessonRepository;
        this.mapper = cradle.lessonMapper;
    }

    public async GetAll(): Promise<IUnitResponseDto[]> {
        return (await this.repo.find()).map(this.mapper.toDTO);
    }

    public async Create(dto: ICreateUnitDto): Promise<IUnitResponseDto> {
        return Promise.resolve(
            this.mapper.toDTO({
                name: dto.name,
                description: dto.description,
                resources: [],
                text: ''
            })
        );
    }
}

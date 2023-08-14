import { IServiceCradle } from '../../abstractions/IServiceCradle';
import { ILessonMapper } from '../../domain/mappers/ILessonMapper';
import { ILessonRepository } from '../../domain/repository/ILessonRepo';
import { ICreateLessonDto } from '../../dto/lesson/ICreateLessonDto';
import { ILessonResponseDto } from '../../dto/lesson/ILessonResponseDto';

export class LessonUseCases {
    private readonly repo: ILessonRepository;
    private readonly mapper: ILessonMapper;

    constructor(cradle: IServiceCradle) {
        this.repo = cradle.lessonRepository;
        this.mapper = cradle.lessonMapper;
    }

    public async GetAll(): Promise<ILessonResponseDto[]> {
        return (await this.repo.find()).map(this.mapper.toDTO);
    }

    public async Create(dto: ICreateLessonDto): Promise<ILessonResponseDto> {
        const created = await this.repo.save({ name: dto.name, description: dto.description, units: [] });
        return Promise.resolve(
            this.mapper.toDTO({
                name: created.name,
                units: [],
                description: created.description,
            }),
        );
    }
}

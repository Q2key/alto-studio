import { IServiceCradle } from '../../abstractions/IServiceCradle';
import { ILessonResourceMapper } from '../../domain/mappers/ILessonResourceMapper';
import { ILessonResourceRepository } from '../../domain/repository/ILessonResourceRepo';
import { ILessonResponseDto } from '../../dto/lesson/ILessonResponseDto';
import { ICreateLessonResourceDto } from '../../dto/lessonResource/ICreateLessonResourceDto';

export class LessonResourcesUseCases {
    private readonly repo: ILessonResourceRepository;
    private readonly mapper: ILessonResourceMapper;

    constructor(cradle: IServiceCradle) {
        this.repo = cradle.lessonResourceRepository;
        this.mapper = cradle.lessonResourceMapper;
    }

    public async GetAll(): Promise<ILessonResponseDto[]> {
        return (await this.repo.find()).map(this.mapper.toDTO);
    }

    public async Create({lessonId, resourceId, type}: ICreateLessonResourceDto): Promise<ILessonResponseDto> {
        return Promise.resolve(
            this.mapper.toDTO({ lessonId, resourceId, type })
        );
    }
}

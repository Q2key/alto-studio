import { IServiceCradle } from '../../abstractions/IServiceCradle';
import { ILessonMapper } from '../../domain/mappers/ILessonMapper';
import { ILessonRepository } from '../../domain/repository/ILessonRepo';
import { ICreateLessonDto } from '../../dto/lesson/ICreateLessonDto';
import { ILessonResponseDto } from '../../dto/lesson/ILessonResponseDto';

export class LessonResourcesUseCases {
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
        const {
            structure: { units },
        } = dto;

        return Promise.resolve(
            this.mapper.toDTO({
                name: '',
                description: '',
                structureType: 0,
                structure: {
                    name: '',
                    description: '',
                    content: {
                        structureType: 0,
                        sections: [],
                    },
                },
            })
        );
    }
}

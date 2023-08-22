import { IServiceCradle } from '../../abstractions/IServiceCradle';
import { ICourseRepository } from '../../domain/repository/ICourseRepo';
import { ICourseMapper } from '../../domain/mappers/ICourseMapper';
import { ICourseResponseDto } from '../../dto/course/ICourseResponseDto';
import { ICreateCourseDto } from '../../dto/course/ICreateCourseDto';
import { ILessonRepository } from '../../domain/repository/ILessonRepo';

export class CourseUseCases {
    private readonly repo: ICourseRepository;
    private readonly lessonRepo: ILessonRepository;
    private readonly mapper: ICourseMapper;

    constructor(cradle: IServiceCradle) {
        this.repo = cradle.courseRepository;
        this.lessonRepo = cradle.lessonRepository;
        this.mapper = cradle.courseMapper;
    }

    public async GetAll(): Promise<ICourseResponseDto[]> {
        return (await this.repo.find()).map(this.mapper.toDTO);
    }

    public async Create(dto: ICreateCourseDto): Promise<ICourseResponseDto> {
        const lessons = [];
        for (const lessonId of dto.lessonIds) {
            const lesson = await this.lessonRepo.findOne(lessonId);
            lessons.push(lesson);
        }

        const created = await this.repo.save({
            name: dto.name,
            description: dto.description,
            lessons,
        });

        return Promise.resolve(this.mapper.toDTO(created));
    }
}

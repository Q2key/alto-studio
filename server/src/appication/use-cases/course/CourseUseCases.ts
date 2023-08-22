import { IServiceCradle } from '../../abstractions/IServiceCradle';
import { ICourseRepository } from '../../repository/ICourseRepo';
import { ICourseMapper } from '../../mappers/ICourseMapper';
import { ICourseResponseDto } from '../../../interface-adapters/dto/course/ICourseResponseDto';
import { ICreateCourseDto } from '../../../interface-adapters/dto/course/ICreateCourseDto';
import { ILessonRepository } from '../../repository/ILessonRepo';

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

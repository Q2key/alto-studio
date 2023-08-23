import { Multer } from 'multer';
import { DataSource } from 'typeorm';
import { ILessonMapper } from '../mappers/ILessonMapper';
import { IUnitResourceMapper } from '../mappers/IUnitResourceMapper';
import { IResourceMapper } from '../mappers/IResourceMapper';
import { ISubscriptionMapper } from '../mappers/ISubscriptionMapper';
import { IUnitMapper } from '../mappers/IUnitMapper';
import { IUserMapper } from '../mappers/IUserMapper';
import { ILessonRepository } from '../repository/ILessonRepo';
import { IResourceRepository } from '../repository/IResourceRepo';
import { ISubscriptionRepo } from '../repository/ISubscriptionRepo';
import { IUnitRepository } from '../repository/IUnitRepo';
import { IUserRepo } from '../repository/IUserRepo';
import { LessonUseCases } from '../use-cases/lesson/LessonUseCases';
import { UnitResourcesUseCases } from '../use-cases/unit-resources/UnitResourcesUseCases';
import { ResourceUseCases } from '../use-cases/resource/ResourceUseCases';
import { SubscriptionUseCases } from '../use-cases/subscription/SubscriptionUseCases';
import { UnitUseCases } from '../use-cases/unit/UnitUseCases';
import { UserUseCases } from '../use-cases/user/UserUseCases';
import { IUnitResourceRepository } from '../repository/IUnitResourceRepository';
import { ICourseRepository } from '../repository/ICourseRepo';
import { CourseUseCases } from '../use-cases/course/CourseUseCases';
import { ICourseMapper } from '../mappers/ICourseMapper';

export interface IServiceCradle {
    /* Repositories */
    userRepository: IUserRepo;
    resourceRepository: IResourceRepository;
    courseRepository: ICourseRepository;
    lessonRepository: ILessonRepository;
    unitResourceRepository: IUnitResourceRepository;
    unitRepository: IUnitRepository;
    subscriptionRepository: ISubscriptionRepo;

    /* Use Cases */
    userUseCases: UserUseCases;
    resourceUseCases: ResourceUseCases;
    courseUseCases: CourseUseCases;
    lessonUseCases: LessonUseCases;
    unitResourceUseCases: UnitResourcesUseCases;
    unitUseCases: UnitUseCases;
    subscriptionUseCases: SubscriptionUseCases;

    /* Mappers */
    userMapper: IUserMapper;
    resourceMapper: IResourceMapper;
    courseMapper: ICourseMapper;
    lessonMapper: ILessonMapper;
    unitResourceMapper: IUnitResourceMapper;
    unitMapper: IUnitMapper;
    subscriptionMapper: ISubscriptionMapper;

    /* data sources */
    dataSource: DataSource; //!bad design
    fileService: Multer;
}

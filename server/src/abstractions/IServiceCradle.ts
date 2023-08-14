import { Multer } from 'multer';
import { DataSource } from 'typeorm';
import { ILessonMapper } from '../domain/mappers/ILessonMapper';
import { IUnitResourceMapper } from '../domain/mappers/IUnitResourceMapper';
import { IResourceMapper } from '../domain/mappers/IResourceMapper';
import { ISubscriptionMapper } from '../domain/mappers/ISubscriptionMapper';
import { IUnitMapper } from '../domain/mappers/IUnitMapper';
import { IUserMapper } from '../domain/mappers/IUserMapper';
import { ILessonRepository } from '../domain/repository/ILessonRepo';
import { IResourceRepository } from '../domain/repository/IResourceRepo';
import { ISubscriptionRepo } from '../domain/repository/ISubscriptionRepo';
import { IUnitRepository } from '../domain/repository/IUnitRepo';
import { IUserRepo } from '../domain/repository/IUserRepo';
import { LessonUseCases } from '../use-cases/lesson/LessonUseCases';
import { UnitResourcesUseCases } from '../use-cases/unitResources/UnitResourcesUseCases';
import { ResourceUseCases } from '../use-cases/resource/ResourceUseCases';
import { SubscriptionUseCases } from '../use-cases/subscription/SubscriptionUseCases';
import { UnitUseCases } from '../use-cases/unit/UnitUseCases';
import { UserUseCases } from '../use-cases/user/UserUseCases';
import { IUnitResourceRepository } from '../domain/repository/IUnitResourceRepository';
import { ICourseRepository } from '../domain/repository/ICourseRepo';
import { CourseUseCases } from '../use-cases/course/CourseUseCases';
import { ICourseMapper } from '../domain/mappers/ICourseMapper';

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

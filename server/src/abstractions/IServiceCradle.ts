import { Multer } from 'multer';
import { DataSource } from 'typeorm';
import { ILessonMapper } from '../domain/mappers/ILessonMapper';
import { ILessonResourceMapper } from '../domain/mappers/ILessonResourceMapper';
import { IResourceMapper } from '../domain/mappers/IResourceMapper';
import { ISubscriptionMapper } from '../domain/mappers/ISubscriptionMapper';
import { IUnitMapper } from '../domain/mappers/IUnitMapper';
import { IUserMapper } from '../domain/mappers/IUserMapper';
import { ILessonRepository } from '../domain/repository/ILessonRepo';
import { ILessonResourceRepository } from '../domain/repository/ILessonResourceRepo';
import { IResourceRepository } from '../domain/repository/IResourceRepo';
import { ISubscriptionRepo } from '../domain/repository/ISubscriptionRepo';
import { IUnitRepository } from '../domain/repository/IUnitRepo';
import { IUserRepo } from '../domain/repository/IUserRepo';
import { LessonUseCases } from '../use-cases/lesson/LessonUseCases';
import { LessonResourcesUseCases } from '../use-cases/lessonResources/LessonResourcesUseCases';
import { ResourceUseCases } from '../use-cases/resource/ResourceUseCases';
import { SubscriptionUseCases } from '../use-cases/subscription/SubscriptionUseCases';
import { UnitUseCases } from '../use-cases/unit/UnitUseCases';
import { UserUseCases } from '../use-cases/user/UserUseCases';

export interface IServiceCradle {
    /* Repositories */
    userRepository: IUserRepo;
    resourceRepository: IResourceRepository;
    lessonRepository: ILessonRepository;
    lessonResourceRepository: ILessonResourceRepository;
    unitRepository: IUnitRepository;
    subscriptionRepository: ISubscriptionRepo;

    /* Use Cases */
    userUseCases: UserUseCases;
    resourceUseCases: ResourceUseCases;
    lessonUseCases: LessonUseCases;
    lessonResourceUseCases: LessonResourcesUseCases;
    unitUseCases: UnitUseCases;
    subscriptionUseCases: SubscriptionUseCases;

    /* Mappers */
    userMapper: IUserMapper;
    resourceMapper: IResourceMapper;
    lessonMapper: ILessonMapper;
    lessonResourceMapper: ILessonResourceMapper;
    unitMapper: IUnitMapper;
    subscriptionMapper: ISubscriptionMapper;

    /* data sources */
    dataSource: DataSource; //!bad design
    fileService: Multer;
}

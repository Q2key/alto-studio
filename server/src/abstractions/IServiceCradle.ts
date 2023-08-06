import { DataSource } from 'typeorm';
import { IUserRepo } from '../domain/repository/IUserRepo';
import { UserUseCases } from '../use-cases/user/UserUseCases';
import { IUserMapper } from '../domain/mappers/IUserMapper';
import { ISubscriptionRepo } from '../domain/repository/ISubscriptionRepo';
import { ISubscriptionMapper } from '../domain/mappers/ISubscriptionMapper';
import { SubscriptionUseCases } from '../use-cases/subscription/SubscriptionUseCases';
import { IResourceMapper } from '../domain/mappers/IResourceMapper';
import { IResourceRepository } from '../domain/repository/IResourceRepo';
import { ResourceUseCases } from '../use-cases/resource/ResourceUseCases';
import { Multer } from 'multer';
import { ILessonRepository } from '../domain/repository/ILessonRepo';
import { LessonUseCases } from '../use-cases/lesson/LessonUseCases';
import { ILessonMapper } from '../domain/mappers/ILessonMapper';

export interface IServiceCradle {
    /* Repositories */
    userRepository: IUserRepo;
    resourceRepository: IResourceRepository;
    lessonRepository: ILessonRepository;
    subscriptionRepository: ISubscriptionRepo;

    /* Use Cases */
    userUseCases: UserUseCases;
    resourceUseCases: ResourceUseCases;
    lessonUseCases: LessonUseCases;
    subscriptionUseCases: SubscriptionUseCases;

    /* Mappers */
    userMapper: IUserMapper;
    resourceMapper: IResourceMapper;
    lessonMapper: ILessonMapper;
    subscriptionMapper: ISubscriptionMapper;

    /* data sources */
    dataSource: DataSource; //!bad design
    fileService: Multer;
}

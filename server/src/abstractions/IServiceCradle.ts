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

export interface IServiceCradle {
    /* Repositories */
    userRepository: IUserRepo;
    resourceRepository: IResourceRepository;
    subscriptionRepository: ISubscriptionRepo;

    /* Use Cases */
    userUseCases: UserUseCases;
    resourceUseCases: ResourceUseCases;
    subscriptionUseCases: SubscriptionUseCases;

    /* Mappers */
    userMapper: IUserMapper;
    resourceMapper: IResourceMapper;
    subscriptionMapper: ISubscriptionMapper;

    /* data sources */
    dataSource: DataSource; //!bad design
    fileService: Multer;
}

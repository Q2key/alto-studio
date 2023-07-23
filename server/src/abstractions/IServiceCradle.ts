import { DataSource } from "typeorm";
import { IUserRepo } from "../domain/repository/IUserRepo";
import { IProjectRepo } from "../domain/repository/IProjectRepo";
import { ProjectUseCases } from "../use-cases/project/ProjectUseCases";
import { UserUseCases } from "../use-cases/user/UserUseCases";
import { IProjectMapper } from "../interfaces/mappers/project/IProjectMapper";
import { IUserMapper } from "../interfaces/mappers/user/IUserMapper";
import {SubscriptionRepository} from "../infrastructure/repository/SubscriptionRepository";
import {ISubscriptionRepo} from "../domain/repository/ISubscriptionRepo";
import {ISubscriptionMapper} from "../interfaces/mappers/subscription/ISubscriptionMapper";
import {SubscriptionUseCases} from "../use-cases/subscription/SubscriptionUseCases";


export interface IServiceCradle {
    /* Repositories */
    userRepository: IUserRepo;
    projectRepository: IProjectRepo;
    subscriptionRepository: ISubscriptionRepo;

    /* Use Cases */
    userUseCases: UserUseCases;
    projectUseCases: ProjectUseCases;
    subscriptionUseCases: SubscriptionUseCases;

    /* Mappers */
    userMapper: IUserMapper;
    projectMapper: IProjectMapper;
    subscriptionMapper: ISubscriptionMapper;

    /* data sources */
    dataSource: DataSource;
}
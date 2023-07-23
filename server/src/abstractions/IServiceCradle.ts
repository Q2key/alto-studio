import { DataSource } from "typeorm";
import { IUserRepo } from "../domain/repository/IUserRepo";
import { IProjectRepo } from "../domain/repository/IProjectRepo";
import { ProjectUseCases } from "../use-cases/project/ProjectUseCases";
import { UserUseCases } from "../use-cases/user/UserUseCases";
import { IProjectMapper } from "../domain/mappers/IProjectMapper";
import { IUserMapper } from "../domain/mappers/IUserMapper";
import {ISubscriptionRepo} from "../domain/repository/ISubscriptionRepo";
import {ISubscriptionMapper} from "../domain/mappers/ISubscriptionMapper";
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
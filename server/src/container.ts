import { AwilixContainer, createContainer, InjectionMode, asClass, asValue } from "awilix";
import { DataSource } from "typeorm";
import { UserRepository } from "./infrastructure/repository/UserRepository";
import { ProjectRepository } from "./infrastructure/repository/ProjectRepository";
import { IServiceCradle } from "./abstractions";
import { ProjectUseCases } from "./use-cases/project/ProjectUseCases";
import { UserUseCases } from "./use-cases/user/UserUseCases";
import { ProjectMapper } from "./use-cases/project/ProjectMapper";
import { UserMapper } from "./use-cases/user/UserMapper";
import { SubscriptionRepository } from "./infrastructure/repository/SubscriptionRepository";
import { SubscriptionUseCases } from "./use-cases/subscription/SubscriptionUseCases";
import { SubscriptionMapper } from "./use-cases/subscription/SubscriptionMapper";


export const createServiceContainer = (dataSource: DataSource): AwilixContainer<IServiceCradle> => {
    const container = createContainer<IServiceCradle>({
        injectionMode: InjectionMode.PROXY,
    });

    container.register({
        userRepository: asClass(UserRepository).singleton(),
        projectRepository: asClass(ProjectRepository).singleton(),
        subscriptionRepository: asClass(SubscriptionRepository).singleton(),
    });

    container.register({
        userUseCases: asClass(UserUseCases).singleton(),
        projectUseCases: asClass(ProjectUseCases).singleton(),
        subscriptionUseCases: asClass(SubscriptionUseCases).singleton(),
    });

    container.register({
        userMapper: asClass(UserMapper).singleton(),
        projectMapper: asClass(ProjectMapper).singleton(),
        subscriptionMapper: asClass(SubscriptionMapper).singleton(),
    });

    container.register({
        dataSource: asValue(dataSource),
    })

    return container;
}
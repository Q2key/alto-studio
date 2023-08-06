import { AwilixContainer, createContainer, InjectionMode, asClass, asValue } from 'awilix';
import { DataSource } from 'typeorm';
import { UserRepository } from './infrastructure/repositories/UserRepository';
import { IServiceCradle } from './abstractions';
import { UserUseCases } from './use-cases/user/UserUseCases';
import { SubscriptionRepository } from './infrastructure/repositories/SubscriptionRepository';
import { SubscriptionUseCases } from './use-cases/subscription/SubscriptionUseCases';
import { SubscriptionMapper } from './infrastructure/mappers/SubscriptionMapper';
import { UserMapper } from './infrastructure/mappers/UserMapper';
import { ResourceRepository } from './infrastructure/repositories/ResourceRepository';
import { ResourceUseCases } from './use-cases/resource/ResourceUseCases';
import { ResourceMapper } from './infrastructure/mappers/ResourceMapper';
import { LessonRepository } from './infrastructure/repositories/LessonRepository';
import { LessonUseCases } from './use-cases/lesson/LessonUseCases';
import { LessonMapper } from './infrastructure/mappers/LessonMapper';

export const createServiceContainer = (dataSource: DataSource): AwilixContainer<IServiceCradle> => {
    const container = createContainer<IServiceCradle>({
        injectionMode: InjectionMode.PROXY,
    });

    container.register({
        userRepository: asClass(UserRepository).singleton(),
        resourceRepository: asClass(ResourceRepository).singleton(),
        lessonRepository: asClass(LessonRepository).singleton(),
        subscriptionRepository: asClass(SubscriptionRepository).singleton(),
    });

    container.register({
        userUseCases: asClass(UserUseCases).singleton(),
        resourceUseCases: asClass(ResourceUseCases).singleton(),
        lessonUseCases: asClass(LessonUseCases).singleton(),
        subscriptionUseCases: asClass(SubscriptionUseCases).singleton(),
    });

    container.register({
        userMapper: asClass(UserMapper).singleton(),
        resourceMapper: asClass(ResourceMapper).singleton(),
        lessonMapper: asClass(LessonMapper).singleton(),
        subscriptionMapper: asClass(SubscriptionMapper).singleton(),
    });

    container.register({
        dataSource: asValue(dataSource),
    });



    return container;
};

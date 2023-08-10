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
import { UnitRepository } from './infrastructure/repositories/UnitRepository';
import { UnitUseCases } from './use-cases/unit/UnitUseCases';
import { UnitMapper } from './infrastructure/mappers/UnitMapper';
import { LessonResourceRepository } from './infrastructure/repositories/LessonResourceRepository';
import { LessonResourcesUseCases } from './use-cases/lessonResources/LessonResourcesUseCases';
import { LessonResourceMapper } from './infrastructure/mappers/LessonResourceMapper';

export const createServiceContainer = (dataSource: DataSource): AwilixContainer<IServiceCradle> => {
    const container = createContainer<IServiceCradle>({
        injectionMode: InjectionMode.PROXY,
    });

    container.register({
        userRepository: asClass(UserRepository).singleton(),
        resourceRepository: asClass(ResourceRepository).singleton(),
        lessonRepository: asClass(LessonRepository).singleton(),
        lessonResourceRepository: asClass(LessonResourceRepository).singleton(),
        unitRepository: asClass(UnitRepository).singleton(),
        subscriptionRepository: asClass(SubscriptionRepository).singleton(),
    });

    container.register({
        userUseCases: asClass(UserUseCases).singleton(),
        resourceUseCases: asClass(ResourceUseCases).singleton(),
        lessonUseCases: asClass(LessonUseCases).singleton(),
        lessonResourceUseCases: asClass(LessonResourcesUseCases).singleton(),
        unitUseCases: asClass(UnitUseCases).singleton(),
        subscriptionUseCases: asClass(SubscriptionUseCases).singleton(),
    });

    container.register({
        userMapper: asClass(UserMapper).singleton(),
        resourceMapper: asClass(ResourceMapper).singleton(),
        lessonMapper: asClass(LessonMapper).singleton(),
        lessonResourceMapper: asClass(LessonResourceMapper).singleton(),
        unitMapper: asClass(UnitMapper).singleton(),
        subscriptionMapper: asClass(SubscriptionMapper).singleton(),
    });

    container.register({
        dataSource: asValue(dataSource),
    });



    return container;
};

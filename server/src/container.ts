import { AwilixContainer, createContainer, InjectionMode, asClass, asValue } from 'awilix';
import { DataSource } from 'typeorm';
import { UserRepository } from './interface-adapters/repositories/UserRepository';
import { IServiceCradle } from './application/abstractions';
import { UserUseCases } from './application/use-cases/user/UserUseCases';
import { SubscriptionRepository } from './interface-adapters/repositories/SubscriptionRepository';
import { SubscriptionUseCases } from './application/use-cases/subscription/SubscriptionUseCases';
import { SubscriptionMapper } from './interface-adapters/mappers/SubscriptionMapper';
import { UserMapper } from './interface-adapters/mappers/UserMapper';
import { ResourceRepository } from './interface-adapters/repositories/ResourceRepository';
import { ResourceUseCases } from './application/use-cases/resource/ResourceUseCases';
import { ResourceMapper } from './interface-adapters/mappers/ResourceMapper';
import { LessonRepository } from './interface-adapters/repositories/LessonRepository';
import { LessonUseCases } from './application/use-cases/lesson/LessonUseCases';
import { LessonMapper } from './interface-adapters/mappers/LessonMapper';
import { UnitRepository } from './interface-adapters/repositories/UnitRepository';
import { UnitUseCases } from './application/use-cases/unit/UnitUseCases';
import { UnitMapper } from './interface-adapters/mappers/UnitMapper';
import { UnitResourceRepository } from './interface-adapters/repositories/UnitResourceRepository';
import { UnitResourcesUseCases } from './application/use-cases/unit-resources/UnitResourcesUseCases';
import { UnitResourceMapper } from './interface-adapters/mappers/UnitResourceMapper';
import { CourseUseCases } from './application/use-cases/course/CourseUseCases';
import { CourseMapper } from './interface-adapters/mappers/CourseMapper';
import { CourseRepository } from './interface-adapters/repositories/CourseRepository';

export const createServiceContainer = (dataSource: DataSource): AwilixContainer<IServiceCradle> => {
    const container = createContainer<IServiceCradle>({
        injectionMode: InjectionMode.PROXY,
    });

    container.register({
        userRepository: asClass(UserRepository).singleton(),
        resourceRepository: asClass(ResourceRepository).singleton(),
        courseRepository: asClass(CourseRepository).singleton(),
        lessonRepository: asClass(LessonRepository).singleton(),
        unitResourceRepository: asClass(UnitResourceRepository).singleton(),
        unitRepository: asClass(UnitRepository).singleton(),
        subscriptionRepository: asClass(SubscriptionRepository).singleton(),
    });

    container.register({
        userUseCases: asClass(UserUseCases).singleton(),
        resourceUseCases: asClass(ResourceUseCases).singleton(),
        lessonUseCases: asClass(LessonUseCases).singleton(),
        courseUseCases: asClass(CourseUseCases).singleton(),
        unitResourceUseCases: asClass(UnitResourcesUseCases).singleton(),
        unitUseCases: asClass(UnitUseCases).singleton(),
        subscriptionUseCases: asClass(SubscriptionUseCases).singleton(),
    });

    container.register({
        userMapper: asClass(UserMapper).singleton(),
        resourceMapper: asClass(ResourceMapper).singleton(),
        lessonMapper: asClass(LessonMapper).singleton(),
        courseMapper: asClass(CourseMapper).singleton(),
        unitResourceMapper: asClass(UnitResourceMapper).singleton(),
        unitMapper: asClass(UnitMapper).singleton(),
        subscriptionMapper: asClass(SubscriptionMapper).singleton(),
    });

    container.register({
        dataSource: asValue(dataSource),
    });


    return container;
};

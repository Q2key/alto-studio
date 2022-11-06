import { AwilixContainer, createContainer, InjectionMode, asClass, asValue, Lifetime } from "awilix";
import { DataSource } from "typeorm";
import { UserRepository } from "./api/repository/UserRepository";
import { GetUsersUseCase } from "./domain/use-cases/user/getUsers/getUsers";
import { IServiceCradle } from "./interface";

export const createServiceContainer = (dataSource: DataSource): AwilixContainer<IServiceCradle> => {
    const container = createContainer<IServiceCradle>({
        injectionMode: InjectionMode.PROXY,
    });

    container.register({
        userRepository: asClass(UserRepository).singleton(),
    });

    container.register({
        getUsersUseCase: asClass(GetUsersUseCase).singleton(),
    });

    container.register({
        dataSource: asValue(dataSource),
    })

    return container;
}
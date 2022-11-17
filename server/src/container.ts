import { AwilixContainer, createContainer, InjectionMode, asClass, asValue } from "awilix";
import { DataSource } from "typeorm";
import { CreateUsersUseCase } from "./domain/use-cases/user/createUser/createUser";
import { GetUsersUseCase } from "./domain/use-cases/user/getUsers/getUsers";
import { UserMapper } from "./infrastructure/mapper/UserMapper";
import { UserRepository } from "./infrastructure/repository/UserRepository";
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
        createUserUseCase: asClass(CreateUsersUseCase).singleton(),
    });

    container.register({
        userMapper: asClass(UserMapper).singleton(),
    });

    container.register({
        dataSource: asValue(dataSource),
    })

    return container;
}
import { AwilixContainer, createContainer, InjectionMode, asClass, asValue } from "awilix";
import { DataSource } from "typeorm";
import { CreateUsersUseCase } from "./domain/use-cases/user/createUser/createUser";
import { GetUsersUseCase } from "./domain/use-cases/user/getUsers/getUsers";
import { UserMapper } from "./infrastructure/mapper/UserMapper";
import { UserRepository } from "./infrastructure/repository/UserRepository";
import { ProjectRepository } from "./infrastructure/repository/ProjectRepository";
import { IServiceCradle } from "./interface";
import { AddProjectsUseCase } from "./domain/use-cases/project/addProject/addProject";
import { GetProjectsUseCase } from "./domain/use-cases/project/getProjects/getProjects";
import { ProjectMapper } from "./infrastructure/mapper/ProjectMapper";

export const createServiceContainer = (dataSource: DataSource): AwilixContainer<IServiceCradle> => {
    const container = createContainer<IServiceCradle>({
        injectionMode: InjectionMode.PROXY,
    });

    container.register({
        userRepository: asClass(UserRepository).singleton(),
        projectRepository: asClass(ProjectRepository).singleton(),
    });

    container.register({
        getUsersUseCase: asClass(GetUsersUseCase).singleton(),
        createUserUseCase: asClass(CreateUsersUseCase).singleton(),

        createProjectsUseCase: asClass(AddProjectsUseCase).singleton(),
        getProjectsUseCase: asClass(GetProjectsUseCase).singleton(),
    });

    container.register({
        userMapper: asClass(UserMapper).singleton(),
        projectMapper: asClass(ProjectMapper).singleton(),
    });

    container.register({
        dataSource: asValue(dataSource),
    })

    return container;
}
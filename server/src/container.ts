import { AwilixContainer, createContainer, InjectionMode, asClass } from "awilix";
import { UserRepository } from "./api/repository/UserRepository";
import { IServiceCradle } from "./interface";

export const createAwilixContainer = (): AwilixContainer<IServiceCradle> => {
    const container = createContainer<IServiceCradle>({
        injectionMode: InjectionMode.PROXY,
    });

    container.register({
        userRepository: asClass(UserRepository).singleton(),
    });

    return container;
}
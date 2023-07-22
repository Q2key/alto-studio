import { DataSource } from "typeorm";
import { IUserMapper } from "../core/mapper/IUserMapper";
import { IUserRepo } from "../core/repository/IUserRepo";
import { IProjectRepo } from "../core/repository/IProjectRepo";
import { IProjectMapper } from "../core/mapper/IProjectMapper";
import { UserUseCases } from "../core/use-cases/user/UserUseCases";
import { ProjectUseCases } from "../core/use-cases/project/ProjectUseCases";

export interface IServiceCradle {
    /* Repositories */
    userRepository: IUserRepo;
    projectRepository: IProjectRepo;

    userUseCases: UserUseCases;
    projectUseCases: ProjectUseCases;

    /* data sources */
    dataSource: DataSource;

    /* Mappers */
    userMapper: IUserMapper;
    projectMapper: IProjectMapper;
}
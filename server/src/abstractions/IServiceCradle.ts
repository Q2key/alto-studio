import { DataSource } from "typeorm";
import { IUserRepo } from "../domain/repository/IUserRepo";
import { IProjectRepo } from "../domain/repository/IProjectRepo";
import { ProjectUseCases } from "../use-cases/project/ProjectUseCases";
import { UserUseCases } from "../use-cases/user/UserUseCases";
import { IProjectMapper } from "../interfaces/mappers/IProjectMapper";
import { IUserMapper } from "../interfaces/mappers/IUserMapper";


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
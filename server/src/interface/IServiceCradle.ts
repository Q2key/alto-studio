import { DataSource } from "typeorm";
import { ICreateUserInput } from "../domain/use-cases/user/createUser/createUserInput";
import { IUseCase } from ".";
import { IUserDto } from "../domain/entities/User/IUser";
import { IUserMapper } from "../domain/entities/User/IUserMapper";
import { IUserRepo } from "../domain/entities/User/IUserRepo";
import { IProjectRepo } from "../domain/entities/Project/IProjectRepo";
import { IProjectDto } from "../domain/entities/Project/IProject";
import { IProjectInput } from "../domain/use-cases/project/addProject/addProjectInput";
import { IProjectMapper } from "../domain/entities/Project/IProjectMapper";
import { IRenderRepo } from "../domain/entities/Render/IRenderRepo";
import { IRenderMapper } from "../domain/entities/Render/IRenderMapper";
import { IRenderDto } from "../domain/entities/Render/IRender";
import { IUploadRenderInput } from "../domain/use-cases/render/uploadRender/uploadRenderInput";

export interface IServiceCradle {
    /* Repositories */
    userRepository: IUserRepo;
    projectRepository: IProjectRepo;
    renderRepository: IRenderRepo;

    /* Use cases*/
    getUsersUseCase: IUseCase<void, IUserDto[]>;
    createUserUseCase: IUseCase<ICreateUserInput, IUserDto>;

    getProjectsUseCase: IUseCase<void, IProjectDto[]>;
    createProjectsUseCase: IUseCase<IProjectInput, IProjectDto>;

    getRendersUseCase: IUseCase<void, IRenderDto[]>;
    uploadRenderUseCase: IUseCase<IUploadRenderInput, IRenderDto>;

    /* data sources */
    dataSource: DataSource;

    /* Mappers */
    userMapper: IUserMapper;
    projectMapper: IProjectMapper;
    renderMapper: IRenderMapper;
}
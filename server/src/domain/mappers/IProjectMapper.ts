

import { IProject } from "../entities/Project/IProject";
import { ProjectEntity } from "../../infrastructure/entities/ProjectEntity";
import {IMapper} from "../../abstractions/IMapper";
import {Project} from "../entities/Project/Project";
import {IProjectDto} from "../../dto/project/IProjectDto";

export interface IProjectMapper extends IMapper<IProject, IProjectDto> {
    toDTO(entity: IProject): IProjectDto;
    toDomain(domain: IProjectDto): IProject;
}
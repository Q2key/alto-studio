

import { IProject } from "../../domain/entities/Project/IProject";
import { ProjectEntity } from "../../infrastructure/entities/ProjectEntity";
import {IMapper} from "./IMapper";

export interface IProjectMapper extends IMapper<ProjectEntity, IProject> {
    toDTO(entity: ProjectEntity): IProject
}
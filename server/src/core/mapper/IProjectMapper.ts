import {IMapper} from "../../infrastructure/mapper/IMapper";
import {IProject, } from "../entities/Project/IProject";
import {ProjectEntity} from "../../infrastructure/entities/ProjectEntity";

export interface IProjectMapper extends IMapper<ProjectEntity, IProject> {
    toDTO(entity: ProjectEntity): IProject
}
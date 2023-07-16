import {IMapper} from "../../../infrastructure/mapper/IMapper";
import {IProject, IProjectDto} from "./IProject";
import {ProjectEntity} from "../../../infrastructure/entities/ProjectEntity";

export interface IProjectMapper extends IMapper<ProjectEntity, IProjectDto> {
    toDTO(entity: ProjectEntity): IProject
}
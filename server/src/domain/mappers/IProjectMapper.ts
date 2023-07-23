

import { IMapper } from "../../abstractions/IMapper";
import { IProjectDto } from "../../dto/project/IProjectDto";
import { IProject } from "../entities/Project/IProject";

export interface IProjectMapper extends IMapper<IProject, IProjectDto> {
    toDTO(entity: IProject): IProjectDto;
    toDomain(domain: IProjectDto): IProject;
}
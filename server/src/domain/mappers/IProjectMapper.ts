

import { IMapper } from "../../abstractions/IMapper";
import { IProjectDto } from "../../dto/project/IProjectDto.1";
import { IProject } from "../entities/Project/IProject";

export interface IProjectMapper extends IMapper<IProject, IProjectDto> {
    toDTO(entity: IProject): IProjectDto;
}
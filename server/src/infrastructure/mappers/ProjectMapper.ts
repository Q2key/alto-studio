
import { IProject } from "../../domain/entities/Project/IProject";
import { IProjectDto } from "../../dto/project/IProjectDto";
import { IProjectMapper } from "../../domain/mappers/IProjectMapper";
import {Domain} from "domain";
import {Project} from "../../domain/entities/Project/Project";

export class ProjectMapper implements IProjectMapper {
    toDTO(entity: IProject): IProjectDto {
        return entity as IProjectDto;
    }

    toDomain(domain: IProjectDto): IProject {
        return Project.Create(domain.name, domain.userId, );
    }

}
import { IProjectDto } from "../../dto/project/IProjectDto";
import { IProjectMapper } from "../../domain/mappers/IProjectMapper";
import { Project } from "../../domain/entities/Project/Project";

export class ProjectMapper implements IProjectMapper {
    toDTO(entity: Project): IProjectDto {
        return entity as IProjectDto;
    }
}
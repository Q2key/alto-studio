import { IProjectDto } from "../../core/dto/IProjectDto";
import { IProject } from "../../core/entities/Project/IProject";
import { IProjectMapper } from "../../core/mapper/IProjectMapper";

export class ProjectMapper implements IProjectMapper {
    toDTO(entity: IProject): IProjectDto {
        return entity as IProjectDto;
    }
}
import {IProjectDto} from "./IProjectDto";

export interface ICreateProjectDto extends Partial<IProjectDto> {
    id?: string;
    name: string;
    userId: string;
}
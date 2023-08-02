import { IMaterial } from "../Material/IMaterial";

export interface ILesson {
    id?: string;
    name: string;
    description: string;
    mediaResource: IMaterial[]
}
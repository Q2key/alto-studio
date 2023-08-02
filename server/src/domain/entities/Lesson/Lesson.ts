import { Material } from "../Material/Material";
import { ILesson } from "./ILesson";

export class Lesson implements ILesson {
    id?: string;
    name: string;
    description: string;
    mediaResource: Material[]
}
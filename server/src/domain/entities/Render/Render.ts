import { IRender } from "./IRender";

export class Render implements IRender {
    readonly id: string;
    projectId: string;
    name: string;
    src: string;
    meta: string;

    constructor(
        projectId: string,
        name: string,
        src: string,
        meta: string) {
        this.projectId = projectId;
        this.name = name;
        this.src = src;
        this.meta = meta;
    }

    public static Create(
        projectId: string,
        name: string,
        src: string,
        meta: string): Render {
        return new Render(projectId, name, src, meta);
    }
}
import { IRender } from "./IRender";

export class Render implements IRender {
    readonly id: string;
    name: string;
    src: string;
    meta: string;

    constructor(
        id: string,
        name: string,
        src: string,
        meta: string) {
        this.id = id;
        this.name = name;
        this.src = src;
        this.meta = meta;
    }

    public static Create(
        id: string,
        name: string,
        src: string,
        meta = ''): Render {
        return new Render(id, name, src, meta);
    }
}
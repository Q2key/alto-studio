import { IResource } from "./IResource";

export class Resource implements IResource {
    id?: string;
    name: string;
    type: string;
    size: number;
    src: string;
    available: boolean;
    contentHash: string;
}
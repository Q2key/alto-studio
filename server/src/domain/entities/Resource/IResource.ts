export interface IResource {
    id?: string;
    name: string;
    originalName: string;
    type: string;
    size: number;
    src: string;
    available: boolean;
}
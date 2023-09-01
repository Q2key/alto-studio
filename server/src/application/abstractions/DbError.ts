export enum ErrorLayer {
    DataBaseError = 'DataBaseError',
}

export interface IError {
    layer: ErrorLayer;
    message: string;
    name: string;
    stack: string | undefined;
}

export class DbError extends Error implements IError {
    layer: ErrorLayer;
    message: string;
    name: string;
    stack: string | undefined;

    constructor(message: string) {
        super(message);
        this.layer = ErrorLayer.DataBaseError;
    }
}
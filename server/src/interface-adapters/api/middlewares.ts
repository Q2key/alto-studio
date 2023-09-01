import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';


function globalErrorHandler(err: Error, _req: Request, res: Response, _next: NextFunction):void {
    const statusCode = res.statusCode;
    const errorMessage = err.message ?? "Unexpected Internal Server Error";
    res.status(statusCode).json({errorMessage});
};


export function makeGlobalErrorHandler(app: Express): void {
    app.use(globalErrorHandler)
}

export function useCorsMiddleware(app: Express): void {
    app.use(cors());
}

export function useJSONMiddleware(app: Express): void {
    app.use(express.json({ strict: true }));
}

export function useStaticMiddleware(app: Express, rootPath: string): void {
    app.use('*/static', express.static(rootPath));
}
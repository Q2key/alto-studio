import express, { Express } from 'express';
import { createRoutes } from './routes';
import { IServiceCradle } from '../abstractions';

export const createExpressServer = (service: IServiceCradle): Express => {
    const app = express();
    createRoutes(app, service);
    return app;
};

export { Express }
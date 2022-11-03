import express, { Express } from 'express';
import { createRoutes } from './routes';
import { IServiceCradle } from '../interface';

export const createServer = (service: IServiceCradle): Express => {
    const app = express();
    createRoutes(app, service);
    return app;
};
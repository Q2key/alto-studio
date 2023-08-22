import express, { Express } from 'express';
import { createRoutes } from './routes';
import { IServiceCradle } from '../../appication/abstractions';
import cors from 'cors';

export const createExpressServer = (service: IServiceCradle): Express => {
    const app = express();
    app.use(cors())
    
    createRoutes(app, service);
    return app;
};

export { Express }
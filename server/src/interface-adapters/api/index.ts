import express, { Express, NextFunction, Request, Response } from 'express';
import { createExpressRoutes } from './routes';
import { IServiceCradle } from '../../application/abstractions';
import {
    makeGlobalErrorHandler,
    useCorsMiddleware,
    useJSONMiddleware,
    useStaticMiddleware,
} from './middlewares';
import multer from 'multer';

const uploadDirectory = 'static';
const multerMiddleware = multer({ dest: uploadDirectory });

export const createExpressServer = (service: IServiceCradle): Express => {
    const app = express();

    useCorsMiddleware(app);
    useJSONMiddleware(app);
    useStaticMiddleware(app, uploadDirectory);
    createExpressRoutes(app, service, multerMiddleware);
    makeGlobalErrorHandler(app);

    return app;
};

export { Express }
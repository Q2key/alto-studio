import express, { Express } from 'express';
import { IServiceCradle } from '../interface';
import { UserController } from './controllers/UserController';

export const createRoutes = (app: Express, service: IServiceCradle): void => {
    const userController = new UserController(service);
    app.use(express.json({ strict: true }));
    app.get('/users', userController.FindAll);
}
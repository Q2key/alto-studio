import express, { Express } from 'express';
import { IServiceCradle } from '../abstractions';
import { ProjectController } from './controllers/ProjectController';
import { UserController } from './controllers/UserController';

export const createRoutes = (app: Express, service: IServiceCradle): void => {
    const userController = new UserController(service);
    app.use(express.json({ strict: true }));
    app.get('/users', userController.FindAll);
    app.post('/user', userController.Create);
    app.post('/put', userController.Update);
    app.delete('/user', userController.Delete);

    const projectController = new ProjectController(service);
    app.get('/projects', projectController.FindAll);
    app.post('/project', projectController.Create);
}
import express, { Express } from 'express';
import { IServiceCradle } from '../interface';
import { ProjectController } from './controllers/ProjectController';
import { RenderController } from './controllers/RenderController';
import { UserController } from './controllers/UserController';

export const createRoutes = (app: Express, service: IServiceCradle): void => {
    const userController = new UserController(service);
    app.use(express.json({ strict: true }));
    app.get('/users', userController.FindAll);
    app.post('/user', userController.Create);

    const projectController = new ProjectController(service);
    app.get('/projects', projectController.FindAll);
    app.post('/project', projectController.Create);

    const renderController = new RenderController(service);
    app.get('/renders', renderController.FindAll);
    app.get('/upload', renderController.Upload);
}
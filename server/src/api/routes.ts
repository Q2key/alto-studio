import express, { Express } from 'express';
import multer from 'multer';
import { IServiceCradle } from '../abstractions';
import { UserController } from './controllers/UserController';
import { SubscriptionController } from "./controllers/SubscriptionController";
import { ResourceController } from './controllers/ResourceController';
import { LessonController } from './controllers/LessonController';
import { UnitController } from './controllers/UnitController';

const uploadDirectory = 'static';

const upload = multer({ dest: uploadDirectory })

export const createRoutes = (app: Express, service: IServiceCradle): void => {

    app.use(express.json({ strict: true }));
    app.use('*/static', express.static('static'));

    const userController = new UserController(service);
    const resourceController = new ResourceController(service);
    const lessonController = new LessonController(service);
    const unitController = new UnitController(service);
    const subscriptionController = new SubscriptionController(service);

    /* users */
    app.get('/users', userController.FindAll);
    app.post('/user', userController.Create);
    app.post('/put', userController.Update);
    app.delete('/user', userController.Delete);

    /* subscriptions */
    app.get('/resources', resourceController.FindAll);
    app.post('/resource', upload.single('file'), resourceController.Upload);

    /* lessons */
    app.get('/lessons', lessonController.FindAll);
    app.post('/lesson', lessonController.Create);

    /* units */
    app.get('/units', unitController.FindAll);
    app.post('/unit', unitController.Create);

    /* subscriptions */
    app.get('/subscriptions', subscriptionController.FindAll);
    app.post('/subscription', subscriptionController.Create);
}
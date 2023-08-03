import express, { Express } from 'express';
import multer from 'multer';
import { IServiceCradle } from '../abstractions';
import { UserController } from './controllers/UserController';
import { SubscriptionController } from "./controllers/SubscriptionController";
import { ResourceController } from './controllers/ResourceController';



const upload = multer({ dest: 'uploads/' })


export const createRoutes = (app: Express, service: IServiceCradle): void => {
    app.use(express.json({ strict: true }));

    const userController = new UserController(service);
    const resourceController = new ResourceController(service);
    const subscriptionController = new SubscriptionController(service);

    /* users */
    app.get('/users', userController.FindAll);
    app.post('/user', userController.Create);
    app.post('/put', userController.Update);
    app.delete('/user', userController.Delete);

    /* subscriptions */
    app.get('/resources', resourceController.FindAll);
    app.post('/resource', upload.single('file'), resourceController.Upload);

    /* subscriptions */
    app.get('/subscriptions', subscriptionController.FindAll);
    app.post('/subscription', subscriptionController.Create);
}
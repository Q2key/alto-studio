import express, { Express } from 'express';
import multer from 'multer';
import { IServiceCradle } from '../../application/abstractions';
import { UserController } from './controllers/UserController';
import { SubscriptionController } from './controllers/SubscriptionController';
import { ResourceController } from './controllers/ResourceController';
import { LessonController } from './controllers/LessonController';
import { UnitController } from './controllers/UnitController';
import { CourseController } from './controllers/CourseController';

const uploadDirectory = 'static';

const upload = multer({ dest: uploadDirectory });

export const createRoutes = (app: Express, service: IServiceCradle): void => {

    app.use(express.json({ strict: true }));
    app.use('*/static', express.static('static'));

    const userController = new UserController(service);
    const resourceController = new ResourceController(service);
    const courseController = new CourseController(service);
    const lessonController = new LessonController(service);
    const unitController = new UnitController(service);
    const subscriptionController = new SubscriptionController(service);

    app.get('/users', userController.FindAll);
    app.post('/user', userController.Create);
    app.post('/put', userController.Update);
    app.delete('/user', userController.Delete);

    app.get('/resources', resourceController.FindAll);
    app.post('/resource', upload.single('file'), resourceController.Upload);

    app.get('/courses', courseController.FindAll);
    app.post('/course', courseController.Create);

    app.get('/lessons', lessonController.FindAll);
    app.post('/lesson', lessonController.Create);

    app.get('/units', unitController.FindAll);
    app.post('/unit', unitController.Create);

    app.get('/subscriptions', subscriptionController.FindAll);
    app.post('/subscription', subscriptionController.Create);
};
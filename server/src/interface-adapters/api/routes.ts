import { Express } from 'express';
import { IServiceCradle } from '../../application/abstractions';
import { UserController } from './controllers/UserController';
import { SubscriptionController } from './controllers/SubscriptionController';
import { ResourceController } from './controllers/ResourceController';
import { LessonController } from './controllers/LessonController';
import { UnitController } from './controllers/UnitController';
import { CourseController } from './controllers/CourseController';
import { Multer } from 'multer';

export const createExpressRoutes = (app: Express, service: IServiceCradle, multer: Multer): void => {
    const userController = new UserController(service);
    const resourceController = new ResourceController(service);
    const courseController = new CourseController(service);
    const lessonController = new LessonController(service);
    const unitController = new UnitController(service);
    const subscriptionController = new SubscriptionController(service);

    app.get('/users', userController.FindAll);
    app.post('/user/login', userController.Login);
    app.post('/user', userController.Create);
    app.put('/user', userController.Update);
    app.delete(`/user`, userController.Delete);

    app.get('/resources', resourceController.FindAll);
    app.post('/resource', multer.single('file'), resourceController.Upload);

    app.get('/courses', courseController.FindAll);
    app.post('/course', courseController.Create);

    app.get('/lessons', lessonController.FindAll);
    app.post('/lesson', lessonController.Create);

    app.get('/units', unitController.FindAll);
    app.post('/unit', unitController.Create);

    app.get('/subscriptions', subscriptionController.FindAll);
    app.post('/subscription', subscriptionController.Create);
};
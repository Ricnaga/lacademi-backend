import { Router } from 'express';
import planRouter from './plan.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/plans', planRouter);

export default routes;

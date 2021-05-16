import { Router } from 'express';
import planRouter from './plan.routes';
import userRouter from './user.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/plans', planRouter);

export default routes;

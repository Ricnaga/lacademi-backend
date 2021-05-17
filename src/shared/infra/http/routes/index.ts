import { Router } from 'express';
import planRouter from '../../../../modules/plans/infra/routes/plan.routes';
import userRouter from '../../../../modules/user/infra/routes/user.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/plans', planRouter);

export default routes;

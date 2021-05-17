import { Router } from 'express';
import PlansController from '../../business-rules/PlansController';

const planRouter = Router();

const plansController = new PlansController();
planRouter.put('/', (request, response) => {
  return plansController.handleUpdate(request, response);
});

planRouter.get('/', (request, response) => {
  return plansController.handleList(request, response);
});

export default planRouter;

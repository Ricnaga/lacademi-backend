import { Router } from 'express';
import PlansRepository from '../repositories/PlansRepository';

const planRouter = Router();

const plansRepository = new PlansRepository();

planRouter.put('/', (request, response) => {
  const { services } = request.body;

  const updatedPlans = plansRepository.update(services);

  return response.json({ updatedPlans });
});

planRouter.get('/', (request, response) => {
  const allPlans = plansRepository.all();

  return response.json({ allPlans });
});

export default planRouter;

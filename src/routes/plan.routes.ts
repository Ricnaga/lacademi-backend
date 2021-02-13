import { Router } from 'express';
import PlansRepository from '../repositories/PlansRepository';

const planRouter = Router();

const plansRepository = new PlansRepository();

planRouter
  .get('/show', (request, response) => {
    const allGymPlans = plansRepository.all();

    return response.json(allGymPlans);
  })

  .put('/update', (request, response) => {
    const { services } = request.body;

    const plans = plansRepository.update(services);

    return response.json(plans);
  });

export default planRouter;

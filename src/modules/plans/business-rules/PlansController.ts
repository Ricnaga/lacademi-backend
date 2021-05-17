import { Request, Response } from 'express';
import Plan from '../model/Plans';
import PlansRepository from '../repositories/PlansRepository';
import ListPlansService from './services/ListPlansService';
import UpdatePlansService from './services/UpdatePlansService';

const plansRepository = new PlansRepository();

export default class PlansController {
  handleUpdate(request: Request, response: Response): Response<Plan[]> {
    try {
      const { services } = request.body;
      const updatePlansService = new UpdatePlansService(plansRepository);

      const updatedPlans = updatePlansService.execute(services);

      return response.json({ updatedPlans });
    } catch (error) {
      return response.status(404).json({ error });
    }
  }

  handleList(request: Request, response: Response): Response<Plan[]> {
    try {
      const listPlansService = new ListPlansService(plansRepository);
      const allPlans = listPlansService.execute();

      return response.json({ allPlans });
    } catch (error) {
      return response.status(404).json({ error });
    }
  }
}

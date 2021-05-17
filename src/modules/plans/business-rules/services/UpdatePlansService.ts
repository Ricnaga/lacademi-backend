import Plan from '../../model/Plans';
import { IPlansRepository } from '../../repositories/IPlansRepository';

export default class UpdatePlansService {
  constructor(private plansRepository: IPlansRepository) {}

  execute(services: Plan[]): Plan[] {
    if (!services) {
      throw new Error('Warning! This services does not exists');
    }
    const updatedPlans = this.plansRepository.update(services);
    return updatedPlans;
  }
}

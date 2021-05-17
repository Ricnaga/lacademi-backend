import Plan from '../../model/Plans';
import { IPlansRepository } from '../../repositories/IPlansRepository';

export default class ListPlansService {
  constructor(private plansRepository: IPlansRepository) {}

  execute(): Plan[] {
    const allPlans = this.plansRepository.all();
    if (!allPlans) {
      throw new Error('Warning! Plans are empty');
    }

    return allPlans;
  }
}

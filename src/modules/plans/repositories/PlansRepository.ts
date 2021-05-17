import Plan from '../model/Plans';
import { IPlansRepository } from './IPlansRepository';

export default class PlansRepository implements IPlansRepository {
  private plans: Plan[];

  constructor() {
    this.plans = [];
  }

  public update(services: Plan[]): Plan[] {
    this.plans = services;

    return services;
  }

  public all(): Plan[] {
    return this.plans;
  }
}

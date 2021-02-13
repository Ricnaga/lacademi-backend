import Plan from '../models/Plan';

export default class PlansRepository {
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

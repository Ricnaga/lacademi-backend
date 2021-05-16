interface IPlans {
  workout: string;
  servicePackage: string;
}

export default class Plan {
  servicePlans: Array<IPlans>;

  constructor(allPlans: IPlans[]) {
    this.servicePlans = allPlans;
  }
}

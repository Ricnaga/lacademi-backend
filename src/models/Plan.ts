interface ArrayObject {
  workout: string;
  servicePackage: string;
}

export default class Plan {
  servicePlans: Array<ArrayObject>;

  constructor(allPlans: ArrayObject[]) {
    this.servicePlans = allPlans;
  }
}

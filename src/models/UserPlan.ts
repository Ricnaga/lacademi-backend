export default class UserPlan {
  id: string;

  workout: string;

  servicePackage: string;

  constructor({ id, workout, servicePackage }: UserPlan) {
    this.id = id;
    this.workout = workout;
    this.servicePackage = servicePackage;
  }
}

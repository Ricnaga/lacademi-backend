import UserPlan from '../models/UserPlan';

export default class UsersPlansRepository {
  private usersplans: UserPlan[];

  constructor() {
    this.usersplans = [];
  }

  public create({ id, workout, servicePackage }: UserPlan): UserPlan {
    const createdUserGymPlans = new UserPlan({ id, workout, servicePackage });

    this.usersplans.push(createdUserGymPlans);

    return createdUserGymPlans;
  }

  public findById(id: string): UserPlan[] | undefined {
    const userId = this.usersplans.filter(user => user.id === id);
    return userId;
  }

  public alterUserPlan(
    userPlanFromRequest: UserPlan,
    userPlanFounded: UserPlan[],
  ): UserPlan {
    const positionUserPlanOnRepository = userPlanFounded.map(uPlan =>
      this.usersplans.indexOf(uPlan),
    );

    this.usersplans.splice(
      positionUserPlanOnRepository[0],
      positionUserPlanOnRepository.length,
    );

    userPlanFounded.map(uPlan => this.usersplans.push(uPlan));

    return userPlanFromRequest;
  }
}

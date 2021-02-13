import User from '../models/User';

export default class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public create(
    name: string,
    rg: string,
    address: string,
    email: string,
  ): User {
    const createdUser = new User({ name, rg, address, email });

    this.users.push(createdUser);

    return createdUser;
  }

  public findById(id: string): User | undefined {
    const userId = this.users.find(user => user.id === id);
    return userId;
  }

  public alterUser(userFromRequest: User, userFounded: User): User {
    const positionUserOnRepository = this.users.indexOf(userFounded);

    this.users.splice(positionUserOnRepository, 1, userFromRequest);
    return userFromRequest;
  }
}

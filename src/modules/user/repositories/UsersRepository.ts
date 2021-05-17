import User from '../model/User';
import { ICreateDTO, IUpdateDTO, IUsersRepository } from './IUsersRepository';

export default class UserRepository implements IUsersRepository {
  private user: User[];

  constructor() {
    this.user = [];
  }

  public create({ name, rg, address, email, services }: ICreateDTO): User {
    const createUser = new User();
    const servicesWithId = services.map(service => {
      return { ...service, id: createUser.id };
    });

    Object.assign(createUser, {
      name,
      rg,
      address,
      email,
      account: true,
      created_at: new Date(),
      services: servicesWithId,
    });

    this.user.push(createUser);

    return createUser;
  }

  public findById(id: string): User | undefined {
    const userId = this.user.find(user => user.id === id);
    return userId;
  }

  public findByRg(rg: string): User | undefined {
    const HasRg = this.user.find(user => user.rg === rg);
    return HasRg;
  }

  public update({
    id,
    name,
    rg,
    address,
    email,
    account,
    services,
  }: IUpdateDTO): User {
    const userIndex = this.user.findIndex(user => user.id === id);

    this.user[userIndex] = {
      ...this.user[userIndex],
      ...{
        id,
        name,
        rg,
        address,
        email,
        account,
        services,
      },
    };

    return this.user[userIndex];
  }
}

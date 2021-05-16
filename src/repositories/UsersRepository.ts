import User from '../models/User';

type IServices = {
  workout: string;
  servicePackage: string;
};

interface IUserRepository {
  name: string;
  rg: string;
  address: string;
  email: string;
  services: Array<IServices>;
}

export default class userRepository {
  private user: User[];

  constructor() {
    this.user = [];
  }

  public create({ name, rg, address, email, services }: IUserRepository): User {
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

  public update({
    id,
    name,
    rg,
    address,
    email,
    account,
    services,
  }: Omit<User, 'created_at'>): User {
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

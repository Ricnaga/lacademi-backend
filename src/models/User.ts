import { v4 } from 'uuid';

export default class User {
  id: string;

  name: string;

  rg: string;

  address: string;

  email: string;

  account: boolean;

  constructor({ name, rg, address, email }: Omit<User, 'id' | 'account'>) {
    this.id = v4();
    this.name = name;
    this.rg = rg;
    this.address = address;
    this.email = email;
    this.account = true;
  }
}

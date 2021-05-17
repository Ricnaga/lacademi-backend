import { v4 as uuidv4 } from 'uuid';

type IServices = {
  id: string;
  workout: string;
  servicePackage: 'Individual' | 'Basic';
};

export default class User {
  id?: string;

  name: string;

  rg: string;

  address: string;

  email: string;

  account: boolean;

  created_at: Date;

  services: Array<IServices>;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

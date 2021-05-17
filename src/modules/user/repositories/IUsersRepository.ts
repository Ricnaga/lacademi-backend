import User from '../model/User';

type IServicesDTO = {
  id: string;
  workout: string;
  servicePackage: 'Individual' | 'Basic';
};

export interface ICreateDTO {
  name: string;
  rg: string;
  address: string;
  email: string;
  services: Array<IServicesDTO>;
}

export interface IUpdateDTO {
  id: string;
  name: string;
  rg: string;
  address: string;
  email: string;
  account: boolean;
  services: Array<IServicesDTO>;
}

export interface IUsersRepository {
  create({ name, rg, address, email, services }: ICreateDTO): User;
  findById(id: string): User | undefined;
  findByRg(rg: string): User | undefined;
  update({ id, name, rg, address, email, account, services }: IUpdateDTO): User;
}

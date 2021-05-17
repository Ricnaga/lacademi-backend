import User from '../../model/User';
import {
  ICreateDTO,
  IUsersRepository,
} from '../../repositories/IUsersRepository';

export default class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, rg, address, email, services }: ICreateDTO): User {
    const alreadyHaveRg = this.usersRepository.findByRg(rg);

    if (alreadyHaveRg) {
      throw new Error('Warning!! RG already have created');
    }

    const createdUser = this.usersRepository.create({
      name,
      rg,
      address,
      email,
      services,
    });

    return createdUser;
  }
}

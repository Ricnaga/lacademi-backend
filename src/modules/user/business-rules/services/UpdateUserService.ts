import User from '../../model/User';
import {
  IUpdateDTO,
  IUsersRepository,
} from '../../repositories/IUsersRepository';

export default class UpdateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  execute({
    id,
    name,
    rg,
    address,
    email,
    account,
    services,
  }: IUpdateDTO): User {
    const userId = this.usersRepository.findById(id);

    if (!userId) {
      throw new Error('Warning! This user does not exists');
    }

    const updatedUser = this.usersRepository.update({
      id,
      name,
      rg,
      address,
      email,
      account,
      services,
    });

    return updatedUser;
  }
}

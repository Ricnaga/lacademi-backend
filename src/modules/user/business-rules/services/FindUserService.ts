import User from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

export default class FindUserService {
  constructor(private usersRepository: IUsersRepository) {}

  execute(id: string): User | undefined {
    const foundUser = this.usersRepository.findById(id);

    if (!foundUser) {
      throw new Error('Warning! this id does not exists');
    }
    return foundUser;
  }
}

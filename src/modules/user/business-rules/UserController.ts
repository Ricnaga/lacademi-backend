import { Request, Response } from 'express';
import User from '../model/User';
import UserRepository from '../repositories/UsersRepository';
import CreateUserService from './services/CreateUserService';
import FindUserService from './services/FindUserService';
import UpdateUserService from './services/UpdateUserService';

const usersRepository = new UserRepository();

export default class UserController {
  handleCreate(request: Request, response: Response): Response<User> {
    try {
      const { name, rg, address, email, services } = request.body;

      const createUserService = new CreateUserService(usersRepository);
      const createdUser = createUserService.execute({
        name,
        rg,
        address,
        email,
        services,
      });

      return response.status(201).json({ createdUser });
    } catch (error) {
      return response.status(404).json({ error });
    }
  }

  handleFind(request: Request, response: Response): Response<User | undefined> {
    try {
      const { id } = request.params;

      const findUserService = new FindUserService(usersRepository);

      const foundUser = findUserService.execute(id);
      return response.json({ foundUser });
    } catch (error) {
      return response.status(404).json({ error });
    }
  }

  handleUpdate(request: Request, response: Response): Response<User> {
    try {
      const { id } = request.params;
      const { name, rg, address, email, account, services } = request.body;
      const updateUserService = new UpdateUserService(usersRepository);

      const updatedUser = updateUserService.execute({
        id,
        name,
        rg,
        address,
        email,
        account,
        services,
      });

      return response.json({ updatedUser });
    } catch (error) {
      console.log(error);
      return response.status(404).json({ error });
    }
  }
}

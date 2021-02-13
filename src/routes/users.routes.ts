import { Router } from 'express';
import UsersRepository from '../repositories/UsersRepository';
import UsersPlansRepository from '../repositories/UsersPlansRepository';

const usersRouter = Router();

const usersRepository = new UsersRepository();
const usersPlansRepository = new UsersPlansRepository();

usersRouter
  .post('/signup', (request, response) => {
    const { name, rg, address, email, services } = request.body;

    const users = usersRepository.create(name, rg, address, email);
    const usersPlans = services.map(
      (service: { workout: string; servicePackage: string }) =>
        usersPlansRepository.create({
          id: users.id,
          workout: service.workout,
          servicePackage: service.servicePackage,
        }),
    );

    return response.json({ users, usersPlans });
  })

  .put('/search-id', (request, response) => {
    const { id } = request.body;

    const searchUser = usersRepository.findById(id);
    const searchUserPlan = usersPlansRepository.findById(id);
    return response.json({ searchUser, searchUserPlan });
  })

  .put('/updateUser', (request, response) => {
    const { id, name, rg, address, email, account } = request.body;
    const { services } = request.body;
    const userFromRequest = {
      id,
      name,
      rg,
      address,
      email,
      account,
    };

    const searchUser = usersRepository.findById(id);
    const searchUserPlan = usersPlansRepository.findById(id);

    if (!searchUser) {
      throw console.log('User not found');
    }

    if (!searchUserPlan) {
      throw console.log('User plan not found');
    }

    const alteredUser = usersRepository.alterUser(userFromRequest, searchUser);
    const alteredUserPlan = usersPlansRepository.alterUserPlan(
      services,
      searchUserPlan,
    );

    return response.json({ alteredUser, alteredUserPlan });
  });

export default usersRouter;

import { Router } from 'express';
import UsersRepository from '../repositories/UsersRepository';

const userRouter = Router();

const usersRepository = new UsersRepository();

userRouter.post('/create', (request, response) => {
  const { name, rg, address, email, services } = request.body;

  const createdUser = usersRepository.create({
    name,
    rg,
    address,
    email,
    services,
  });

  return response.status(201).json({ createdUser });
});

userRouter.put('/find/:id', (request, response) => {
  const { id } = request.params;

  const foundUser = usersRepository.findById(id);
  return response.json({ foundUser });
});

userRouter.put('/update', (request, response) => {
  const { id, name, rg, address, email, account, services } = request.body;

  const updatedUser = usersRepository.update({
    id,
    name,
    rg,
    address,
    email,
    account,
    services,
  });

  return response.json({ updatedUser });
});

export default userRouter;

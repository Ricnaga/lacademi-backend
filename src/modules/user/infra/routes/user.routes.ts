import { Router } from 'express';
import UserController from '../../business-rules/UserController';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/', (request, response) => {
  return userController.handleCreate(request, response);
});

userRouter.put('/:id', (request, response) => {
  return userController.handleFind(request, response);
});

userRouter.put('/:id/update', (request, response) => {
  return userController.handleUpdate(request, response);
});

export default userRouter;

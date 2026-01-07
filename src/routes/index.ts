import { Router } from 'express';
import { TaskController } from '../controllers/TaskController';

const routes = Router();

routes.get('/tasks', TaskController.getAll);
routes.post('/tasks', TaskController.create);
routes.delete('/tasks/:id', TaskController.delete);

export default routes;
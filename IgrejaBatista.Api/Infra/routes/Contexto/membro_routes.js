import express from 'express';
import membroController from '../../../controller/membro_controller.js';
import { Authorize } from '../../../Application/Middlewares/auth_middleware.js';

const membroRouter = express.Router();

membroRouter.get('/', Authorize, membroController.all);
membroRouter.post('/', Authorize, membroController.create);
membroRouter.put('/:id_membro', Authorize, membroController.update);
membroRouter.delete('/:id_membro', Authorize, membroController.delete);
membroRouter.get('/:id_membro', Authorize, membroController.getmembro);

export default membroRouter;

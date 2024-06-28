import express from 'express';
import historicoMembro_controller from '../../../controller/historicoMembro_controller.js';
import { Authorize } from '../../../Application/Middlewares/auth_middleware.js';

const historicoMembroRouter = express.Router();

historicoMembroRouter.get('/', Authorize, historicoMembro_controller.all);
historicoMembroRouter.get('/:id_membro', Authorize, historicoMembro_controller.getmembro);

export default historicoMembroRouter;

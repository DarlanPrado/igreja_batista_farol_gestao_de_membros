import express from 'express';
import bairroController from '../../../controller/bairro_controller.js';
import { Authorize } from '../../../Application/Middlewares/auth_middleware.js';

const bairroRouter = express.Router();

bairroRouter.get('/', Authorize, bairroController.all);
bairroRouter.post('/', Authorize, bairroController.create);
bairroRouter.put('/:id_bairros', Authorize, bairroController.update);
bairroRouter.delete('/:id_bairros', Authorize, bairroController.delete);
bairroRouter.get('/:id_bairros', Authorize, bairroController.getcodigo);

export default bairroRouter;
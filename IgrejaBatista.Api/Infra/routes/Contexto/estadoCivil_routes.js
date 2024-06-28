import express from 'express';
import estadoCivilController from '../../../controller/estadoCivil_controller.js';
import { Authorize } from '../../../Application/Middlewares/auth_middleware.js';

const estadoCivilRouter = express.Router();

estadoCivilRouter.get('/', Authorize, estadoCivilController.all);
estadoCivilRouter.post('/', Authorize, estadoCivilController.create);
estadoCivilRouter.put('/:id_estado_civil', Authorize, estadoCivilController.update);
estadoCivilRouter.delete('/:id_estado_civil', Authorize, estadoCivilController.delete);
estadoCivilRouter.get('/:id_estado_civil', Authorize, estadoCivilController.getcodigo);

export default estadoCivilRouter;

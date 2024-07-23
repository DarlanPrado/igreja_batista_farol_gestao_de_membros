import express from 'express';
import usuarioController from '../../../controller/usuario_controller.js';
import { Authorize } from '../../../Application/Middlewares/auth_middleware.js';

const usuarioRouter = express.Router();

usuarioRouter.get('/', Authorize, usuarioController.all);
usuarioRouter.post('/', Authorize, usuarioController.create);
usuarioRouter.put('/:id_usuario', Authorize, usuarioController.update);
usuarioRouter.delete('/:id_usuario', Authorize, usuarioController.delete);
usuarioRouter.get('/:id_usuario', Authorize, usuarioController.getUsuario);

export default usuarioRouter;

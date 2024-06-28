import cidadeController from "../../../controller/cidade_controller.js"
import express from "express"
import { Authorize } from '../../../Application/Middlewares/auth_middleware.js';

const cidadeRouter = express.Router()

cidadeRouter.get('/', Authorize, cidadeController.all)
cidadeRouter.post('/', Authorize, cidadeController.create)
cidadeRouter.put('/:id_cidades', Authorize, cidadeController.update)
cidadeRouter.delete('/:id_cidades', Authorize, cidadeController.delete)
cidadeRouter.get('/:id_cidades', Authorize, cidadeController.getcodigo)

export default cidadeRouter
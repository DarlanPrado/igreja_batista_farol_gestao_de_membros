import express from 'express';
import authController from '../../../controller/auth_controller.js';

const authRouter = express.Router();

authRouter.post('/', authController.login);

export default authRouter;
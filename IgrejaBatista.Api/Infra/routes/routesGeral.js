import express from 'express';
import bairroRouter from './Contexto/bairro_routes.js';
import estadoCivilRouter from './Contexto/estadoCivil_routes.js';
import membroRouter from './Contexto/membro_routes.js';
import usuarioRouter from './Contexto/usuario_routes.js';
import authRouter from './Contexto/auth_routes.js';
import historicoMembroRouter from './Contexto/historicoMembro_routes.js';

const router = express.Router();

router.use('/bairros', bairroRouter);
router.use('/estado_civil', estadoCivilRouter);
router.use('/membros', membroRouter);
router.use('/usuarios', usuarioRouter);
router.use('/auth', authRouter)
router.use('/membros/historico', historicoMembroRouter)

export default router;
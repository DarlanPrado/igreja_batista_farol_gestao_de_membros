import express from "express"
import {bairros} from "../controller/bairro_controller.js"
import {cidades} from "../controller/cidade_controller.js"
import {estadoCivil} from "../controller/estadoCivil_controller.js"
import {membroIgreja} from "../controller/membro_controller.js"
import {usuario} from "../controller/usuario_controller.js"

let router = express.Router ()

router.get('/bairros', bairros.all)
router.post('/bairros', bairros.create)
router.put('/bairros/:id_bairros', bairros.update)
router.delete('/bairros/:id_bairros', bairros.delete)
router.get('/bairros/:id_bairros', bairros.getcodigo)


router.get('/cidades', cidades.all)
router.post('/cidades', cidades.create)
router.put('/cidades/:id_cidades', cidades.update)
router.delete('/cidades/:id_cidades', cidades.delete)
router.get('/cidades/:id_cidades', cidades.getcodigo)


router.get('/estado_civil', estadoCivil.all)
router.post('/estado_civil', estadoCivil.create)
router.put('/estado_civil/:id_estado_civil', estadoCivil.update)
router.delete('/estado_civil/:id_estado_civil', estadoCivil.delete)
router.get('/estado_civil/:id_estado_civil', estadoCivil.getcodigo)


router.get('/membro_igreja', membroIgreja.all)
router.post('/membro_igreja', membroIgreja.create)
router.put('/membro_igreja/:id_membro', membroIgreja.update)
router.delete('/membro_igreja/:id_membro', membroIgreja.delete)
router.get('/membro_igreja/:id_membro', membroIgreja.getcodigo)

router.get('/usuario', usuario.all)
router.post('/usuario', usuario.create)
router.put('/usuario/:id_usuario', usuario.update)
router.delete('/usuario/:id_usuario', usuario.delete)
router.get('/usuario/:id_usuario', usuario.getcodigo)

export {router}
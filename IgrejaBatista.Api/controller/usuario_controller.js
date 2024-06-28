import usuarioService from '../Application/Services/usuario_service.js';

const usuarioController = {
    async all(req, res) {
        try {
            const usuarios = await usuarioService.getAllUsuarios();
            res.send(usuarios);
        } catch (e) {
            console.log("Erro na consulta ...", e);
            res.status(400).send({ error: "Erro ao buscar usuários." });
        }
    },

    async create(req, res) {
        try {
            const usuario = await usuarioService.createUsuario(req.body);
            res.send({
                status: "Inserção efetuada com sucesso!",
                result: usuario
            });
        } catch (e) {
            console.log("Erro na inserção ...", e);
            res.status(400).send({ error: "Erro ao criar usuário." });
        }
    },

    async update(req, res) {
        try {
            const usuario = await usuarioService.updateUsuario(req.params.id_usuario, req.body);
            res.send({
                status: "Atualização efetuada com sucesso!",
                result: usuario
            });
        } catch (e) {
            console.log("Erro na atualização ...", e);
            res.status(400).send({ error: "Erro ao atualizar usuário." });
        }
    },

    async delete(req, res) {
        try {
            const usuario = await usuarioService.deleteUsuario(req.params.id_usuario);
            res.send({
                status: `A exclusão do usuário com ID ${req.params.id_usuario} foi efetuada com sucesso`,
                result: usuario
            });
        } catch (e) {
            console.log("Erro na exclusão ...", e);
            res.status(400).send({ error: "Erro ao excluir usuário." });
        }
    },

    async getUsuario(req, res) {
        try {
            const usuario = await usuarioService.getUsuarioById(req.params.id_usuario);
            res.send(usuario);
        } catch (e) {
            console.log("Erro na consulta ...", e);
            res.status(400).send({ error: "Erro ao buscar usuário." });
        }
    }
};

export default usuarioController;
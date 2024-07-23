import bairroService from '../Application/Services/bairro_service.js';

const bairroController = {
    async all(req, res) {
        try {
            const bairros = await bairroService.getAllBairros();
            res.send(bairros);
        } catch (e) {
            console.log("Erro na consulta ...", e);
            res.status(400).send({ error: "Erro ao buscar bairros." });
        }
    },

    async create(req, res) {
        try {
            const bairro = await bairroService.createBairro(req.body);
            res.send({
                status: "Inserção Efetuada com sucesso!",
                result: bairro
            });
        } catch (e) {
            console.log("Erro na inserção ...", e);
            res.status(400).send({ error: "Erro ao criar bairro." });
        }
    },

    async update(req, res) {
        try {
            const bairro = await bairroService.updateBairro(req.params.id_bairro, req.body);
            res.send({
                status: "Atualização efetuada com sucesso!",
                result: bairro
            });
        } catch (e) {
            console.log("Erro na atualização ...", e);
            res.status(400).send({ error: "Erro ao atualizar bairro." });
        }
    },

    async delete(req, res) {
        try {
            const bairro = await bairroService.deleteBairro(req.params.id_bairro);
            res.send({
                status: "Exclusão efetuada com sucesso!",
                result: bairro
            });
        } catch (e) {
            console.log("Erro na exclusão ...", e);
            res.status(400).send({ error: "Erro ao excluir bairro." });
        }
    },

    async getcodigo(req, res) {
        try {
            const bairro = await bairroService.getBairroById(req.params.id_bairro);
            res.send(bairro);
        } catch (e) {
            console.log("Erro na consulta ...", e);
            res.status(400).send({ error: "Erro ao buscar bairro." });
        }
    }
};

export default bairroController;
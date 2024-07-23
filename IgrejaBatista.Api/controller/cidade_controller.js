import cidadeService from '../Application/Services/cidade_service.js';

const cidadeController = {
    async all(req, res) {
        try {
            const cidades = await cidadeService.getAllCidades();
            res.send(cidades);
        } catch (e) {
            console.log("Erro na consulta ...", e);
            res.status(400).send({ error: "Erro ao buscar cidades." });
        }
    },

    async create(req, res) {
        try {
            const cidade = await cidadeService.createCidade(req.body);
            res.send({
                status: "Inserção Efetuada com sucesso!",
                result: cidade
            });
        } catch (e) {
            console.log("Erro na inserção ...", e);
            res.status(400).send({ error: "Erro ao criar cidade." });
        }
    },

    async update(req, res) {
        try {
            const cidade = await cidadeService.updateCidade(req.params.id_cidade, req.body);
            res.send({
                status: "Atualização efetuada com sucesso!",
                result: cidade
            });
        } catch (e) {
            console.log("Erro na atualização ...", e);
            res.status(400).send({ error: "Erro ao atualizar cidade." });
        }
    },

    async delete(req, res) {
        try {
            const cidade = await cidadeService.deleteCidade(req.params.id_cidade);
            res.send({
                status: "Exclusão efetuada com sucesso!",
                result: cidade
            });
        } catch (e) {
            console.log("Erro na exclusão ...", e);
            res.status(400).send({ error: "Erro ao excluir cidade." });
        }
    },

    async getcodigo(req, res) {
        try {
            const cidade = await cidadeService.getCidadeById(req.params.id_cidade);
            res.send(cidade);
        } catch (e) {
            console.log("Erro na consulta ...", e);
            res.status(400).send({ error: "Erro ao buscar cidade." });
        }
    }
};


export default cidadeController;
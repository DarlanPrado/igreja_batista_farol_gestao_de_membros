import membroService from '../Application/Services/membro_service.js';

const membroController = {
    async all(req, res) {
        try {
            const membros = await membroService.getAllMembros();
            res.send(membros);
        } catch (e) {
            console.log("Erro na consulta ...", e);
            res.status(400).send({ error: "Erro ao buscar membros." });
        }
    },

    async create(req, res) {
        try {
            const membro = await membroService.createMembro(req.body);
            res.send({
                status: "Inserção efetuada com sucesso!",
                result: membro
            });
        } catch (e) {
            console.log("Erro na inserção ...", e);
            res.status(400).send({ error: "Erro ao criar membro." });
        }
    },

    async update(req, res) {
        try {
            const membro = await membroService.updateMembro(req.params.id_membro, req.body);
            res.send({
                status: "Atualização efetuada com sucesso!",
                result: membro
            });
        } catch (e) {
            console.log("Erro na atualização ...", e);
            res.status(400).send({ error: "Erro ao atualizar membro." });
        }
    },

    async delete(req, res) {
        try {
            const membro = await membroService.deleteMembro(req.params.id_membro);
            res.send({
                status: `A exclusão do membro com ID ${req.params.id_membro} foi efetuada com sucesso`,
                result: membro
            });
        } catch (e) {
            console.log("Erro na exclusão ...", e);
            res.status(400).send({ error: "Erro ao excluir membro." });
        }
    },

    async getmembro(req, res) {
        try {
            const membro = await membroService.getMembroById(req.params.id_membro);
            res.send(membro);
        } catch (e) {
            console.log("Erro na consulta ...", e);
            res.status(400).send({ error: "Erro ao buscar membro." });
        }
    }
};

export default membroController;
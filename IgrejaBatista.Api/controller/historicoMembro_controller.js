import historicoMembroService from '../Application/Services/historicoMembro_service.js';

const historicoMembroController = {
    async all(req, res) {
        try {
            const historicoMembros = await historicoMembroService.getAllHistoricoMembros();
            res.send(historicoMembros);
        } catch (e) {
            console.log("Erro na consulta ...", e);
            res.status(400).send({ error: "Erro ao buscar histórico de membros." });
        }
    },

    async getmembro(req, res) {
        try {
            const historicoMembro = await historicoMembroService.getHistoricoMembroById(req.params.id_membro);
            res.send(historicoMembro);
        } catch (e) {
            console.log("Erro na consulta ...", e);
            res.status(400).send({ error: "Erro ao buscar histórico de membro." });
        }
    }
};

export default historicoMembroController;
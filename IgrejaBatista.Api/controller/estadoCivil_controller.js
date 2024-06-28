import estadoCivilService from '../Application/Services/estadoCivil_service.js';

const estadoCivilController = {
    async all(req, res) {
        try {
            const estadosCivis = await estadoCivilService.getAllEstadosCivis();
            res.send(estadosCivis);
        } catch (e) {
            console.log("Erro na consulta ...", e);
            res.status(400).send({ error: "Erro ao buscar estados civis." });
        }
    },

    async create(req, res) {
        try {
            const estadoCivil = await estadoCivilService.createEstadoCivil(req.body);
            res.send({
                status: "Inserção efetuada com sucesso!",
                result: estadoCivil
            });
        } catch (e) {
            console.log("Erro na inserção ...", e);
            res.status(400).send({ error: "Erro ao criar estado civil." });
        }
    },

    async update(req, res) {
        try {
            const estadoCivil = await estadoCivilService.updateEstadoCivil(req.params.id_estado_civil, req.body);
            res.send({
                status: "Atualização efetuada com sucesso!",
                result: estadoCivil
            });
        } catch (e) {
            console.log("Erro na atualização ...", e);
            res.status(400).send({ error: "Erro ao atualizar estado civil." });
        }
    },

    async delete(req, res) {
        try {
            const estadoCivil = await estadoCivilService.deleteEstadoCivil(req.params.id_estado_civil);
            res.send({
                status: "Exclusão efetuada com sucesso!",
                result: estadoCivil
            });
        } catch (e) {
            console.log("Erro na exclusão ...", e);
            res.status(400).send({ error: "Erro ao excluir estado civil." });
        }
    },

    async getcodigo(req, res) {
        try {
            const estadoCivil = await estadoCivilService.getEstadoCivilById(req.params.id_estado_civil);
            res.send(estadoCivil);
        } catch (e) {
            console.log("Erro na consulta ...", e);
            res.status(400).send({ error: "Erro ao buscar estado civil." });
        }
    }
};

export default estadoCivilController;
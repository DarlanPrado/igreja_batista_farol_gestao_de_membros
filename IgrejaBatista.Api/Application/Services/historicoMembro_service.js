import HistoricoMembro from '../../Domain/models/historicoMembro_model.js';

const historicoMembroService = {
    async getAllHistoricoMembros() {
        return await HistoricoMembro.findAll();
    },

    async createHistoricoMembro(historicoMembroData) {
        return await HistoricoMembro.create({
            id_usuario: historicoMembroData.id_usuario,
            id_membro: historicoMembroData.id_membro,
            celular: historicoMembroData.celular,
            data_nascimento: historicoMembroData.data_nascimento,
            id_endereco: historicoMembroData.id_endereco,
            id_estado_civil: historicoMembroData.id_estado_civil,
            data_ingresso: historicoMembroData.data_ingresso,
            bl_batizado: historicoMembroData.bl_batizado,
            descricao: historicoMembroData.descricao
        });
    },

    async getHistoricoMembroById(id_membro) {
        const historicoMembro = await HistoricoMembro.findByPk(id_membro);
        if (historicoMembro) {
            return historicoMembro;
        } else {
            throw new Error('Histórico de membro não encontrado.');
        }
    }
};

export default historicoMembroService;
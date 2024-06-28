import Membro from '../../Domain/models/membro_model.js';
import historicoMembroService from './historicoMembro_service.js';

const membroService = {
    async getAllMembros() {
        return await Membro.findAll();
    },

    async createMembro(membroData) {
        let membro = await Membro.create({
            numero_celular: membroData.numero_celular,
            data_nascimento: membroData.data_nascimento,
            data_ingresso: membroData.data_ingresso,
            bl_batizado: membroData.bl_batizado,
            bl_ativo: membroData.bl_ativo
        });

        await historicoMembroService.createHistoricoMembro(membro.assign(membroData))

        return membro
    },

    async updateMembro(id_membro, membroData) {
        const membro = await Membro.findByPk(id_membro);
        if (membro) {
            membro.numero_celular = membroData.numero_celular;
            membro.data_nascimento = membroData.data_nascimento;
            membro.data_ingresso = membroData.data_ingresso;
            membro.bl_batizado = membroData.bl_batizado;
            membro.bl_ativo = membroData.bl_ativo;
            await membro.save();
            return membro;
        } else {
            throw new Error('Membro não encontrado.');
        }
    },

    async deleteMembro(id_membro) {
        const membro = await Membro.findByPk(id_membro);
        if (membro) {
            await membro.destroy();
            return membro;
        } else {
            throw new Error('Membro não encontrado.');
        }
    },

    async getMembroById(id_membro) {
        const membro = await Membro.findByPk(id_membro);
        if (membro) {
            return membro;
        } else {
            throw new Error('Membro não encontrado.');
        }
    }
};

export default membroService;
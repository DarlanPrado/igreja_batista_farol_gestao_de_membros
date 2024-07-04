import Membro from '../../Domain/models/membro_model.js';
import historicoMembroService from './historicoMembro_service.js';

const membroService = {
    async getAllMembros() {
        return await Membro.findAll();
    },

    async createMembro(membroData) {
        let membro = await Membro.create({
            nome: membroData.nome,
            id_endereco: membroData.id_endereco,
            celular: membroData.celular,
            id_estado_civil: membroData.id_estado_civil,
            data_nascimento: membroData.data_nascimento,
            data_ingresso: membroData.data_ingresso,
            bl_batizado: membroData.bl_batizado,
            bl_ativo: membroData.bl_ativo
        });

        await historicoMembroService.createHistoricoMembro(Object.assign(membro, membroData))

        return membro
    },

    async updateMembro(id_membro, membroData) {
        const membro = await Membro.findByPk(id_membro);
        if (membro) {
            membro.nome = membroData.nome;
            membro.id_endereco = membroData.id_endereco;
            membro.celular = membroData.celular;
            membro.id_estado_civil = membroData.id_estado_civil;
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
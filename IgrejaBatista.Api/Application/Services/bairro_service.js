import Bairro from '../../Domain/models/bairro_model.js';

const bairroService = {
    async getAllBairros() {
        return await Bairro.findAll();
    },

    async createBairro(bairroData) {
        return await Bairro.create({
            nome: bairroData.nome
        });
    },

    async updateBairro(id_bairro, bairroData) {
        const bairro = await Bairro.findByPk(id_bairro);
        if (bairro) {
            bairro.nome = bairroData.nome;
            await bairro.save();
            return bairro;
        } else {
            throw new Error('Bairro não encontrado.');
        }
    },

    async deleteBairro(id_bairro) {
        const bairro = await Bairro.findByPk(id_bairro);
        if (bairro) {
            await bairro.destroy();
            return bairro;
        } else {
            throw new Error('Bairro não encontrado.');
        }
    },

    async getBairroById(id_bairro) {
        const bairro = await Bairro.findByPk(id_bairro);
        if (bairro) {
            return bairro;
        } else {
            throw new Error('Bairro não encontrado.');
        }
    }
};

export default bairroService;
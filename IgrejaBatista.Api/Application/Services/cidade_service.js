import Cidade from '../../Domain/models/cidade_model.js';

const cidadeService = {
    async getAllCidades() {
        return await Cidade.findAll();
    },

    async createCidade(cidadeData) {
        return await Cidade.create({
            nome: cidadeData.nome
        });
    },

    async updateCidade(id_cidade, cidadeData) {
        const cidade = await Cidade.findByPk(id_cidade);
        if (cidade) {
            cidade.nome = cidadeData.nome;
            await cidade.save();
            return cidade;
        } else {
            throw new Error('Cidade não encontrada.');
        }
    },

    async deleteCidade(id_cidade) {
        const cidade = await Cidade.findByPk(id_cidade);
        if (cidade) {
            await cidade.destroy();
            return cidade;
        } else {
            throw new Error('Cidade não encontrada.');
        }
    },

    async getCidadeById(id_cidade) {
        const cidade = await Cidade.findByPk(id_cidade);
        if (cidade) {
            return cidade;
        } else {
            throw new Error('Cidade não encontrada.');
        }
    }
};

export default cidadeService;
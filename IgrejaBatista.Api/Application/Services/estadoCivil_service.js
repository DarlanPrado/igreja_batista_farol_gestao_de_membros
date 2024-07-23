import EstadoCivil from '../../Domain/models/estadoCivil_model.js';

const estadoCivilService = {
    async getAllEstadosCivis() {
        return await EstadoCivil.findAll();
    },

    async createEstadoCivil(estadoCivilData) {
        return await EstadoCivil.create({
            nome: estadoCivilData.nome,
            bl_ativo: estadoCivilData.bl_ativo
        });
    },

    async updateEstadoCivil(id_estado_civil, estadoCivilData) {
        const estadoCivil = await EstadoCivil.findByPk(id_estado_civil);
        if (estadoCivil) {
            estadoCivil.nome = estadoCivilData.nome;
            estadoCivil.bl_ativo = estadoCivilData.bl_ativo;
            await estadoCivil.save();
            return estadoCivil;
        } else {
            throw new Error('Estado civil não encontrado.');
        }
    },

    async deleteEstadoCivil(id_estado_civil) {
        const estadoCivil = await EstadoCivil.findByPk(id_estado_civil);
        if (estadoCivil) {
            await estadoCivil.destroy();
            return estadoCivil;
        } else {
            throw new Error('Estado civil não encontrado.');
        }
    },

    async getEstadoCivilById(id_estado_civil) {
        const estadoCivil = await EstadoCivil.findByPk(id_estado_civil);
        if (estadoCivil) {
            return estadoCivil;
        } else {
            throw new Error('Estado civil não encontrado.');
        }
    }
};

export default estadoCivilService;
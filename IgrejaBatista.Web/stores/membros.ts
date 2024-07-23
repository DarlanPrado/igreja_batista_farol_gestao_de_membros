import type { Endereco, Membro, MembroData } from "~/types/stores/membros"

interface State {
    membros: MembroData[]
    enderecos: Endereco[],
}

export const useMembroStore = defineStore('membros', {
    state: (): State => {
        return {
            membros: [],
            enderecos: [],
        }
    },
    getters: {
        getAllMembros: (state): Membro[] => {
            return state.membros.map(membro => ({
                id_membro: membro.id_membro,
                nome: membro.nome,
                data_nascimento: membro.data_nascimento,
                bl_ativo: membro.bl_ativo
            }));
        },
        getMembroDataById: (state) => (idMembro: MembroData["id_membro"]) => state.membros.find(membro => membro.id_membro == idMembro),
        getEnderecos: (state) => state.enderecos,
        getEnderecoById: (state) => (idEnderecos: Endereco["id_endereco"]) => state.enderecos.find(enderecos => enderecos.id_endereco = idEnderecos),
        getCidades: (state) => ['Joinville'],
        getBairroByIdCidade: (state) => ['Anita Garibaldi', 'Comasa'],
    },
    actions: {
        defineMembros(membros: MembroData[]){
            this.membros = membros;
        },
        defineEnderecos(enderecos: Endereco[]){
            this.enderecos = enderecos
        }
    }
})
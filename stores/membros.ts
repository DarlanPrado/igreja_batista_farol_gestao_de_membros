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
                id: membro.id,
                nome: membro.nome,
                data_nascimento: membro.data_nascimento,
                bl_ativo: membro.bl_ativo
            }));
        },
        getMembroDataById: (state) => (idMembro: MembroData["id"]) => state.membros.find(membro => membro.id == idMembro),
        getEnderecos: (state) => state.enderecos,
        getEnderecoById: (state) => (idEnderecos: Endereco["id_endereco"]) => state.enderecos.find(enderecos => enderecos.id_endereco = idEnderecos),
        getCidades: (state) => state.enderecos.map(endereco => endereco.cidade),
        getBairroByIdCidade: (state) => (idCidade: Endereco["cidade"]["id"]) => state.enderecos.filter(endereco => endereco.cidade.id == idCidade)?.map(endereco => endereco.bairro),
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
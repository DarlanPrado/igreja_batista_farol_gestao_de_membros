import type { UsuarioData, Usuario } from '~/types/stores/usuarios';

interface State {
    usuarios: UsuarioData[];
}

export const useUsuarioStore = defineStore('usuarios', {
    state: (): State => {
        return {
            usuarios: [],
        }
    },
    getters: {
        getAllUsuarios: (state): Usuario[] => {
            return state.usuarios.map(usuario => ({
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,
                tipo: usuario.tipo
            }));
        },
        getUsuarioDataById: (state) => (idUsuario: UsuarioData["id"]) => state.usuarios.find(usuario => usuario.id === idUsuario),
        getUsuariosByTipo: (state) => (tipo: string) => state.usuarios.filter(usuario => usuario.tipo === tipo),
    },
    actions: {
        defineUsuarios(usuarios: UsuarioData[]) {
            this.usuarios = usuarios;
        },
        addUsuario(usuario: UsuarioData) {
            this.usuarios.push(usuario);
        },
        updateUsuario(id: number, updatedData: Partial<UsuarioData>) {
            const index = this.usuarios.findIndex(usuario => usuario.id === id);
            if (index !== -1) {
                this.usuarios[index] = { ...this.usuarios[index], ...updatedData };
            }
        },
        deleteUsuario(id: number) {
            this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
        }
    }
});

import Usuario from '../../Domain/models/usuario_model.js';
import bcrypt from 'bcrypt'

const usuarioService = {
    async getAllUsuarios() {
        return await Usuario.findAll();
    },

    async createUsuario(usuarioData) {
        let usuario = await Usuario.create({
            nome: usuarioData.nome,
            email: usuarioData.email,
            senha: await GerarHash(usuarioData.senha),
            token: usuarioData.token,
            bl_admin: usuarioData.bl_admin,
            bl_ativo: usuarioData.bl_ativo
        });

        return {
            id: usuario.id_usuario,
            nome: usuario.nome,
            email: usuario.email,
            bl_admin: usuario.bl_admin,
            bl_ativo: usuario.bl_ativo
        }
    },

    async updateUsuario(id_usuario, usuarioData) {
        const usuario = await Usuario.findByPk(id_usuario);
        if (usuario) {
            usuario.nome = usuarioData.nome;
            usuario.email = usuarioData.email;
            usuario.token = usuarioData.token;
            usuario.bl_admin = usuarioData.bl_admin;
            usuario.bl_ativo = usuarioData.bl_ativo;
            await usuario.save();
            return usuario;
        } else {
            throw new Error('Usuário não encontrado.');
        }
    },

    async deleteUsuario(id_usuario) {
        const usuario = await Usuario.findByPk(id_usuario);
        if (usuario) {
            await usuario.destroy();
            return usuario;
        } else {
            throw new Error('Usuário não encontrado.');
        }
    },

    async getUsuarioById(id_usuario) {
        const usuario = await Usuario.findByPk(id_usuario);
        if (usuario) {
            return usuario;
        } else {
            throw new Error('Usuário não encontrado.');
        }
    },
    
    async getUsuarioByEmail(email){
        const usuario = await Usuario.findOne({
            where:{
                email,
                bl_ativo: true
            }
        })

        if (usuario) {
            return usuario;
        } else {
            throw new Error('Usuário não encontrado.');
        }
    }
};

async function GerarHash(senhaPadrao) {
    return bcrypt.hashSync(senhaPadrao, parseInt(process.env.SALTROUNDS));
};

export default usuarioService;
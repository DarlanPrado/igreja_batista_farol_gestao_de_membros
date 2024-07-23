import jwt from 'jsonwebtoken'
import usuarioService from './usuario_service.js';
import bcrypt from 'bcrypt'

const authService = {
    async login(request){
        let usuario = await usuarioService.getUsuarioByEmail(request.email)
        if (!await bcrypt.compare(request.senha, usuario.senha)) throw new Error("Usuário ou senha inválido.")
        
        try{
            return jwt.sign({ nome: usuario.nome, email: usuario.email, id: usuario.id_usuario, bl_admin: usuario.bl_admin }, process.env.JWT_SECRET)
        }
        catch (e){
            throw new Error("Erro na requisição.")
        }
    }
};

export default authService;
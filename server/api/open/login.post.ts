
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client'
import response from "~/server/utils/response";
import validateBodyParams from "~/server/utils/validate";
import Yup from "~/server/utils/yup";

const prisma = new PrismaClient();

export default defineEventHandler(async(event) => {

    const bodySchema = Yup.object({
        email: Yup.string().email().required(),
        senha: Yup.string().required()
    });


    const body = await validateBodyParams(event, bodySchema).catch(e => {
        return response(event, {
            code: 400,
            status: 'Bad request',
            message: "Informe o email e senha",
            data: e
        })
    });

    const userExist = await prisma.usuarios.findFirst({
        where: {
            email: body!.email,
            senha: body!.senha,
            bl_ativo: true,
        },
        select: {
            id_usuario: true,
        }
    });

    if(!userExist?.id_usuario){
        return response(event, {
            code: 404,
            status: "Not Found",
            message: "Usuário ou senha incorretos"
        })
    }

    const token = jwt.sign({
        data: JSON.stringify({
            user_id: userExist.id_usuario,
            date: new Date()
        })
    }, useRuntimeConfig().jwt_cript_key, {
        expiresIn: useRuntimeConfig().jwt_expire,
        algorithm: "HS256",
    })

    const updatedUser = await prisma.usuarios.update({
        where: {
          id_usuario: userExist.id_usuario,
        },
        data: {
          token: token,
        },
        select: {
          id_usuario: true,
          nome: true,
          email: true,
          token: true,
          bl_admin: true,
          bl_first_login: true,
        },
    });
    
    return response(event, {
        code: 200,
        status: 'Ok',
        message: "Sucesso ao logar",
        data: updatedUser
    })
});
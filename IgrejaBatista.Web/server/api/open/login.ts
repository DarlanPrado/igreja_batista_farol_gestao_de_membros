import Usuarios from "~/server/models/Usuarios"
import Database from "~/server/utils/conn"
import $yup from "~/server/utils/yup"

export default defineEventHandler(async(event) => {
    
    const body = await $yup.object().shape({
        email: $yup.string().trim().email(),
        senha: $yup.string().trim()
    }).validate(await readBody(event)).catch(error => {
        throw createError({statusCode: 400, statusMessage: 'bad request', message: error.message})
    })

    // const usuarios = await Database.query("SELECT * FROM usuarios")

    // return {
    //     body: body,
    //     usuario: usuarios
    // }
})
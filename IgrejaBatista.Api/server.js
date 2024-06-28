import { config } from "dotenv-safe"
config()

import express from "express"
import router from "./Infra/routes/routesGeral.js"

let server = express()

server.use(express.json())
server.use(express.urlencoded({extented:true}))
server.use('/api', router)
server.listen(process.env.PORTABASE, function () {
    console.log(`Servidor rodando na porta: ${process.env.PORTABASE}`)
})
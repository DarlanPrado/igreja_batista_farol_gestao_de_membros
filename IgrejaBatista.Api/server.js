import { config } from "dotenv-safe"
config()

import express from "express"
import router from "./Infra/routes/routesGeral.js"
import cors from 'cors'

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

let server = express()
server.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, x-access-token');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
server.use(express.json())
server.use(express.urlencoded({extented:true}))
server.use('/api', router)
server.use(cors(corsOptions))
server.listen(process.env.PORTABASE, function () {
    console.log(`Servidor rodando na porta: ${process.env.PORTABASE}`)
})
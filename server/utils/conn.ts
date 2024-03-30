import * as sequelize from 'sequelize'

export const Database = ()  => {
    
    try{
        const conn = new sequelize.Sequelize({
            host: useRuntimeConfig().dbHost,
            database: useRuntimeConfig().dbDatabase,
            username:  useRuntimeConfig().dbuser,
            password: useRuntimeConfig().dbPassword,
            port: parseInt(useRuntimeConfig().dbPort),
        });

        return conn
    }catch(e){
        throw createError({statusCode: 500, message: "Não foi possivel se conectar a base de dados", fatal: true})
    }

}

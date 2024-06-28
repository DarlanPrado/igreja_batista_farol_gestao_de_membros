import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('pac3', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' // ou 'postgres', 'sqlite', 'mssql'
});

try{
    sequelize.authenticate();
}
catch (e){
    console.log("Erro ao conectar a base.")

    throw e;
}

export default sequelize
import { Sequelize } from 'sequelize';

const Database = new Sequelize({
    dialect: 'mysql',
    host: useRuntimeConfig().dbHost,
    database: useRuntimeConfig().dbDatabase,
    username: useRuntimeConfig().dbuser,
    password: useRuntimeConfig().dbPassword,
    port: parseInt(useRuntimeConfig().dbPort),
});

export default Database;
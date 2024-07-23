import sequelize from "../../Infra/config/connection.js";
import { DataTypes } from "sequelize";

const Cidade = sequelize.define('Cidade', {
    id_cidade: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'cidades',
    timestamps: false
});

export default Cidade;
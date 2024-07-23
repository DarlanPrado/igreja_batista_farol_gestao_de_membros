import { DataTypes } from 'sequelize';
import sequelize from "../../Infra/config/connection.js";

const Bairro = sequelize.define('Bairro', {
    id_bairro: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'bairros',
    timestamps: false
});

export default Bairro;

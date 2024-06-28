import { DataTypes } from 'sequelize';
import sequelize from "../../Infra/config/connection.js";

const Endereco = sequelize.define('Endereco', {
    id_endereco: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_cidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'cidade',
            key: 'id_cidade'
        }
    },
    id_bairro: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'bairro',
            key: 'id_bairro'
        }
    }
}, {
    tableName: 'enderecos',
    timestamps: false
});

export default Endereco;

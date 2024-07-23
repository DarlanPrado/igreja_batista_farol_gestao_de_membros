import { DataTypes } from 'sequelize';
import sequelize from "../../Infra/config/connection.js";

const EstadoCivil = sequelize.define('EstadoCivil', {
    id_estado_civil: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bl_ativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: 'estado_civil',
    timestamps: false
});

export default EstadoCivil;

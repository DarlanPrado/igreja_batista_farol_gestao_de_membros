import { Sequelize, DataTypes } from 'sequelize';
import sequelize from "../../Infra/config/connection.js";

const Membro = sequelize.define('Membro', {
    id_membro: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    celular: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id_estado_civil: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'estado_civil',
            key: 'id_estado_civil'
        }
    },
    id_endereco: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'endereco',
            key: 'id_endereco'
        }
    },
    data_ingresso: {
        type: DataTypes.DATE,
        allowNull: false
    },
    bl_batizado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    bl_ativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: 'membros',
    timestamps: false
});

export default Membro;

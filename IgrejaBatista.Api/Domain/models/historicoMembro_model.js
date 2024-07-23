import { Sequelize, DataTypes } from 'sequelize';
import sequelize from "../../Infra/config/connection.js";

const HistoricoMembro = sequelize.define('HistoricoMembro', {
    id_historico_membro: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuario',
            key: 'id_usuario'
        }
    },
    id_membro: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'membro',
            key: 'id_membro'
        }
    },
    celular: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id_endereco: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'endereco',
            key: 'id_endereco'
        }
    },
    id_estado_civil: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'estado_civil',
            key: 'id_estado_civil'
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
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    tableName: 'historico_membros',
    timestamps: false
});

export default HistoricoMembro;

import sequelize from "sequelize";
import { DataType } from "sequelize-typescript";

const HistoricoMembros = Database().define('HistoricoMembros', {
    id_historico_membro: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_usuario: {
        type: DataType.INTEGER,
    },
    id_membro: {
        type: DataType.INTEGER,
        allowNull: false
    },
    nome: {
        type: DataType.CHAR(100),
        allowNull: false,
    },
    celular: {
        type: DataType.CHAR(10),
    },
    data_nascimento: {
        type: DataType.DATE
    },
    id_estado_civil: {
        type: DataType.INTEGER
    },
    id_endereco: {
        type: DataType.INTEGER
    },
    data_ingresso: {
        type: DataType.DATE
    },
    bl_batizado: {
        type: DataType.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    bl_ativo: {
        type: DataType.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    updated_at: {
        type: DataType.DATE,
        defaultValue: sequelize.NOW,
        allowNull: false
    }
}, {
    tableName: 'historico_membros',
    timestamps: false
})
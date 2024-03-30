import { DataType, ForeignKey } from "sequelize-typescript";
import Enderecos from "./Enderecos";
import EstadoCivil from "./EstadoCivil";

const Membros = Database().define('Membros', {
    id_membro: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
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
    }
}, {
    tableName: 'membros',
    timestamps: false
})

Membros.belongsTo(Enderecos, { foreignKey: 'id_endereco' })
Membros.belongsTo(EstadoCivil, { foreignKey: 'id_estado_civil' })

export default Membros;
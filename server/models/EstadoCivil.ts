import { DataType } from "sequelize-typescript";

const EstadoCivil = Database().define('EstadoCivil', {
    id_estado_civil: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type: DataType.CHAR(50),
        unique: true,
        allowNull: false
    },
    bl_ativo: {
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }
}, {
    tableName: 'estado_civil',
    timestamps: false
})

export default EstadoCivil;
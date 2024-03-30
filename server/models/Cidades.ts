import { DataType } from "sequelize-typescript";

const Cidades = Database()?.define('Cidades', {
    id_cidade: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type: DataType.CHAR(50),
        unique: true,
        allowNull: false
    }
}, {
    tableName: 'cidades',
    timestamps: false
})

export default Cidades;
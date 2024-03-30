import Enderecos from "./Enderecos";
import { DataType } from "sequelize-typescript";

const Bairros = Database()?.define('Bairros', {
    id_bairro: {
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
    tableName: 'bairros',
    timestamps: false,
})

export default Bairros;
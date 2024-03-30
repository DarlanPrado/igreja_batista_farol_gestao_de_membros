import { DataType } from "sequelize-typescript";
import Cidades from "./Cidades";
import Bairros from "./Bairros";

const Enderecos = Database().define('Enderecos', {
    id_endereco: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    id_cidade: {
        type: DataType.INTEGER,
        allowNull: false
    },
    id_bairro: {
        type: DataType.INTEGER,
        unique: true,
        allowNull: false
    }
}, {
    tableName: 'enderecos',
    timestamps: false,
})

Enderecos.belongsTo(Cidades, { foreignKey: 'id_cidade' });
Enderecos.belongsTo(Bairros, { foreignKey: 'id_bairro' });

export default Enderecos;
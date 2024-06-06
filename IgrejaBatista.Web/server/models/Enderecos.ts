import { DataType, Default, Model } from "sequelize-typescript";
import Cidades from "./Cidades";
import Bairros from "./Bairros";
import Database from "../utils/conn";

class Enderecos extends Model{
    public id_endereco!: number;
    public id_cidade!: number;
    public id_bairro!: number;
}

Enderecos.init({
    id_endereco: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    id_cidade: {
        type: DataType.INTEGER,
        allowNull: false,
        references: {
            model: Cidades,
            key: "id_cidade",
        }
    },
    id_bairro: {
        type: DataType.INTEGER,
        unique: true,
        allowNull: false,
        references: {
            model: Bairros,
            key: 'id_bairro'
        }
    }
}, {
    sequelize: Database,
    tableName: 'enderecos',
    timestamps: false,
})

export default Enderecos;

// const Enderecos = Database.define('Enderecos', {
//     id_endereco: {
//         type: DataType.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false,
//     },
//     id_cidade: {
//         type: DataType.INTEGER,
//         allowNull: false
//     },
//     id_bairro: {
//         type: DataType.INTEGER,
//         unique: true,
//         allowNull: false    
//     }
// }, {
//     tableName: 'enderecos',
//     timestamps: false,
// })

// Enderecos.belongsTo(Cidades, { foreignKey: 'id_cidade' });
// Enderecos.belongsTo(Bairros, { foreignKey: 'id_bairro' });

// export default Enderecos;
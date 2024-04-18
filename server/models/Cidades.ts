import { DataType, Model } from "sequelize-typescript";
import Database from "../utils/conn";

class Cidades extends Model {
    public id_cidade!: number;
    public nome!: string
}

Cidades.init({
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
    sequelize: Database,
    tableName: 'cidades',
    timestamps: false
})

export default Cidades;

// const Cidades = Database?.define('Cidades', {
//     id_cidade: {
//         type: DataType.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false,
//     },
//     nome: {
//         type: DataType.CHAR(50),
//         unique: true,
//         allowNull: false
//     }
// }, {
//     tableName: 'cidades',
//     timestamps: false
// })

// export default Cidades;
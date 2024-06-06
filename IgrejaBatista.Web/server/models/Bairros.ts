import { DataType, Model } from "sequelize-typescript";
import Database from "../utils/conn";

class Bairros extends Model {
    public id_bairro!: number;
    public nome!: string;
}

Bairros.init({
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
    sequelize: Database,
    tableName: 'bairros',   
    timestamps: false,
})

export default Bairros

// const Bairros = Database.define('Bairros', {
//     id_bairro: {
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
//     tableName: 'bairros',
//     timestamps: false,
// })

// export default Bairros;
import { DataType, Model } from "sequelize-typescript";
import Database from "../utils/conn";

class EstadoCivil extends Model{
    public id_estado_civil!: number;
    public nome!: string;
    public bl_ativo!: boolean;
}

EstadoCivil.init({
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
    sequelize: Database,
    tableName: 'estado_civil',
    timestamps: false
})

export default EstadoCivil;

// const EstadoCivil = Database.define('EstadoCivil', {
//     id_estado_civil: {
//         type: DataType.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false,
//     },
//     nome: {
//         type: DataType.CHAR(50),
//         unique: true,
//         allowNull: false
//     },
//     bl_ativo: {
//         type: DataType.BOOLEAN,
//         allowNull: false,
//         defaultValue: true,
//     }
// }, {
//     tableName: 'estado_civil',
//     timestamps: false
// })

// export default EstadoCivil;
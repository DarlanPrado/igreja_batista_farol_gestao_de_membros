import { DataType, Model } from "sequelize-typescript";
import Enderecos from "./Enderecos";
import EstadoCivil from "./EstadoCivil";
import Database from "../utils/conn";

class Membros extends Model{
    public id_membro!: number;
    public nome!: string;
    public celular!: string;
    public data_nascimento!: Date;
    public id_estado_civil!: number;
    public id_endereco!: number;
    public data_ingresso!: number;
    public bl_batizado!: boolean;
    public bl_ativo!: boolean;
}

Membros.init({
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
        type: DataType.INTEGER,
        references: {
            model: EstadoCivil,
            key: 'id_estado_civil'
        }
    },
    id_endereco: {
        type: DataType.INTEGER,
        references: {
            model: Enderecos,
            key: 'id_enderecos'
        }
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
    sequelize: Database,
    tableName: 'membros',
    timestamps: false
})

export default Membros;

// const Membros = Database.define('Membros', {
//     id_membro: {
//         type: DataType.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false,
//     },
//     nome: {
//         type: DataType.CHAR(100),
//         allowNull: false,
//     },
//     celular: {
//         type: DataType.CHAR(10),
//     },
//     data_nascimento: {
//         type: DataType.DATE
//     },
//     id_estado_civil: {
//         type: DataType.INTEGER
//     },
//     id_endereco: {
//         type: DataType.INTEGER
//     },
//     data_ingresso: {
//         type: DataType.DATE
//     },
//     bl_batizado: {
//         type: DataType.BOOLEAN,
//         defaultValue: false,
//         allowNull: false
//     },
//     bl_ativo: {
//         type: DataType.BOOLEAN,
//         defaultValue: true,
//         allowNull: false
//     }
// }, {
//     tableName: 'membros',
//     timestamps: false
// })

// Membros.belongsTo(Enderecos, { foreignKey: 'id_endereco' })
// Membros.belongsTo(EstadoCivil, { foreignKey: 'id_estado_civil' })

// export default Membros;
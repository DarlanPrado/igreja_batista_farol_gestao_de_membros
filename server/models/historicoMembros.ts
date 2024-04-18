import sequelize from "sequelize";
import { DataType, Default, Model } from "sequelize-typescript";
import Database from "../utils/conn";
import Usuarios from "./Usuarios";
import Membros from "./Membros";
import EstadoCivil from "./EstadoCivil";
import Enderecos from "./Enderecos";

class HistoricoMembros extends Model{
    public id_historico_membro!: number;
    public id_usuario!: number;
    public id_membro!: number;
    public nome!: string;
    public celular!: string;
    public data_nascimento!: Date;
    public id_estado_civil!: number;
    public id_endereco!: number;
    public data_ingresso!: number;
    public bl_batizado!: boolean;
    public bl_ativo!: boolean;
    public updated_at!: Date;
    public descricao!: string;
}

HistoricoMembros.init({
    id_historico_membro: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_usuario: {
        type: DataType.INTEGER,
        references: {
            model: Usuarios,
            key: 'id_usuario'
        }
    },
    id_membro: {
        type: DataType.INTEGER,
        allowNull: false,
        references: {
            model: Membros,
            key: 'id_membro'
        }
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
    },
    updated_at: {
        type: DataType.DATE,
        defaultValue: sequelize.NOW,
        allowNull: false
    },
    descricao: {
        type: DataType.TEXT
    }
}, {
    sequelize: Database,
    tableName: 'historico_membros',
    timestamps: false
})

export default HistoricoMembros;

// const HistoricoMembros = Database.define('HistoricoMembros', {
//     id_historico_membro: {
//         type: DataType.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false
//     },
//     id_usuario: {
//         type: DataType.INTEGER,
//     },
//     id_membro: {
//         type: DataType.INTEGER,
//         allowNull: false
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
//     },
//     updated_at: {
//         type: DataType.DATE,
//         defaultValue: sequelize.NOW,
//         allowNull: false
//     }
// }, {
//     tableName: 'historico_membros',
//     timestamps: false
// })

// export default HistoricoMembros;
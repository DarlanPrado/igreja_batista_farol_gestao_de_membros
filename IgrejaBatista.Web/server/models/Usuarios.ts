import { DataType, Model } from "sequelize-typescript";
import Database from "../utils/conn";

class Usuarios extends Model{
    public id_usuario!: number;
    public nome!: string;
    public email!: string;
    public senha!: string;
    public token!: string;
    public bl_admin!: boolean;
    public bl_ativo!: boolean;
    public bl_first_login!: boolean;
    public created_at!: Date;
    public updated_at!: Date;
}

Usuarios.init({
    id_usuario: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type: DataType.CHAR(100),
        allowNull: false
    },
    email: {
        type: DataType.CHAR(255),
        unique: true,
        allowNull: false
    },
    senha: {
        type: DataType.TEXT
    },
    token: {
        type: DataType.TEXT
    },
    bl_admin: {
        type: DataType.BOOLEAN,
        defaultValue: false,
    },
    bl_ativo: {
        type: DataType.BOOLEAN,
        defaultValue: false
    },
    bl_firts_login: {
        type: DataType.BOOLEAN,
        defaultValue: true,
    },
    created_at: {
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW
    },
    updated_at: {
        type: DataType.DATE,
        allowNull: false,
        defaultValue: '0000-00-00 00:00:00'
    }
}, {
    sequelize: Database,
    tableName: 'usuarios',
    timestamps: false,
})

export default Usuarios;

// const Usuarios = Database.define('Usuarios', {
//     id_usuario: {
//         type: DataType.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false,
//     },
//     nome: {
//         type: DataType.CHAR(100),
//         allowNull: false
//     },
//     email: {
//         type: DataType.CHAR(255),
//         unique: true,
//         allowNull: false
//     },
//     senha: {
//         type: DataType.TEXT
//     },
//     token: {
//         type: DataType.TEXT
//     },
//     bl_admin: {
//         type: DataType.BOOLEAN,
//         defaultValue: false,
//     },
//     bl_ativo: {
//         type: DataType.BOOLEAN,
//         defaultValue: false
//     },
//     bl_firts_login: {
//         type: DataType.BOOLEAN,
//         defaultValue: true,
//     },
//     created_at: {
//         type: DataType.DATE,
//         allowNull: false,
//         defaultValue: sequelize.NOW,
//     },
//     updated_at: {
//         type: DataType.DATE,
//         allowNull: false,
//         defaultValue: sequelize.literal('0000-00-00 00:00:00')
//     }
// }, {
//     tableName: 'usuarios',
//     timestamps: false,
// })

// export default Usuarios;
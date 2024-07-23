export default interface Session {
    id_usuario: number,
    nome: string,
    email: string,
    token: string,
    bl_admin: boolean,
    bl_first_login: boolean,
}
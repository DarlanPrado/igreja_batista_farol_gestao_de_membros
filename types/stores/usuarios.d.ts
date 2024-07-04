export interface Senha{
    senha: string
}

export interface UsuarioData{
    id: number,
    nome: string,
    email: string,
    tipo: string,
    senha: Senha["senha"]
}

export interface Usuario{
    id: UsuarioData["id"],
    nome: UsuarioData["nome"],
    email: UsuarioData["email"],
    tipo: UsuarioData["tipo"]
}

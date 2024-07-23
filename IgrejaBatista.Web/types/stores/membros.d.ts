interface Cidade {
    id: number,
    nome: string
}

interface Bairro {
    id: number,
    nome: string,
}

export interface Endereco {
    id_endereco: number,
    cidade: Cidade,
    bairro: Bairro,
}

export interface EstadoCivil {
    id_estado_civil: number,
    nome: string,
    bl_ativo: boolean
}

export interface MembroData {
    id_membro: number,
    nome: string,
    celular?: string | undefined,
    data_nascimento?: Date | undefined,
    id_estado_civil?: EstadoCivil["id"] | undefined,
    id_endereco?: number | undefined,
    data_ingresso?: Date | undefined,
    bl_batizado: boolean,
    bl_ativo: boolean,
}

export interface Membro {
    id_membro: MembroData["id_membro"],
    nome: MembroData["nome"],
    data_nascimento: MembroData["data_nascimento"],
    bl_ativo: MembroData["bl_ativo"]
}
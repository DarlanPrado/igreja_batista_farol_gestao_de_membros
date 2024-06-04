import connect from "../config/connection.js";

let usuario = {};
const con = await connect();

usuario.all = async function (req, res) {
    try {
        let [usuarios] = await con.query("SELECT * FROM usuario;");
        res.send(usuarios);
    } catch (e) {
        console.log("Erro na consulta ...", e);
        res.status(500).send("Erro na consulta");
    }
};

usuario.create = async function(req, res) {
    try {
        let { nome, email, senha, token, blAdmin, blAtivo } = req.body;
        let sql = "INSERT INTO usuario (nome, email, senha, token, bl_admin, bl_ativo) VALUES (?, ?, ?, ?, ?, ?);";
        let values = [nome, email, senha, token, blAdmin, blAtivo];
        let [result] = await con.query(sql, values);
        res.send({
            status: "Inserção efetuada com sucesso!",
            result: result
        });
    } catch (e) {
        console.log("Erro na inserção ...", e);
        res.status(500).send("Erro na inserção");
    }
};

usuario.update = async function(req, res) {
    try {
        let id_usuario = req.params.id_usuario;
        let { nome, email, senha, token, blAdmin, blAtivo } = req.body;
        let sql = "UPDATE usuario SET nome=?, email=?, senha=?, token=?, bl_admin=?, bl_ativo=? WHERE id_usuario=?;";
        let values = [nome, email, senha, token, blAdmin, blAtivo, id_usuario];
        let [result] = await con.query(sql, values);
        res.send({
            status: "Atualização efetuada com sucesso!",
            result: result
        });
    } catch (e) {
        console.log("Erro na atualização ...", e);
        res.status(500).send("Erro na atualização");
    }
};

usuario.delete = async function(req, res) {
    try {
        let id_usuario = req.params.id_usuario;
        let sql = "DELETE FROM usuario WHERE id_usuario=?;";
        let [result] = await con.query(sql, [id_usuario]);
        res.send({
            status: `A exclusão do usuário com ID ${id_usuario} foi efetuada com sucesso`,
            result: result
        });
    } catch (e) {
        console.log("Erro na exclusão ...", e);
        res.status(500).send("Erro na exclusão");
    }
};

usuario.getUsuario = async function(req, res) {
    try {
        let id_usuario = req.params.id_usuario;
        let sql = "SELECT * FROM usuario WHERE id_usuario=?;";
        let [usuario] = await con.query(sql, [id_usuario]);
        res.send(usuario);
    } catch (e) {
        console.log("Erro na consulta ...", e);
        res.status(500).send("Erro na consulta");
    }
};

export { usuario };

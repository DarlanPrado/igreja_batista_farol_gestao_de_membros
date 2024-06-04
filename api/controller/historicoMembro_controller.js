import connect from "../config/connection.js";

let historicoMembro = {};
const con = await connect();

historicoMembro.all = async function (req, res) {
    try {
        let [membros] = await con.query("SELECT * FROM historicoMembro;");
        res.send(membros);
    } catch (e) {
        console.log("Erro na consulta ...", e);
        res.status(500).send("Erro na consulta");
    }
};

historicoMembro.create = async function(req, res) {
    try {
        let { celular, dataNascimento, dataIngresso, dtBatizado, descricao } = req.body;
        let sql = "INSERT INTO historicoMembro (celular, data_nascimento, data_ingresso, dt_batizado, descricao) VALUES (?, ?, ?, ?, ?);";
        let values = [celular, dataNascimento, dataIngresso, dtBatizado, descricao];
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

historicoMembro.update = async function(req, res) {
    try {
        let id_membro = req.params.id_membro;
        let { celular, dataNascimento, dataIngresso, dtBatizado, descricao } = req.body;
        let sql = "UPDATE historicoMembro SET celular=?, data_nascimento=?, data_ingresso=?, dt_batizado=?, descricao=? WHERE id_membro=?;";
        let values = [celular, dataNascimento, dataIngresso, dtBatizado, descricao, id_membro];
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

historicoMembro.delete = async function(req, res) {
    try {
        let id_membro = req.params.id_membro;
        let sql = "DELETE FROM historicoMembro WHERE id_membro=?;";
        let [result] = await con.query(sql, [id_membro]);
        res.send({
            status: `A exclusão do membro com ID ${id_membro} foi efetuada com sucesso`,
            result: result
        });
    } catch (e) {
        console.log("Erro na exclusão ...", e);
        res.status(500).send("Erro na exclusão");
    }
};

historicoMembro.getmembro = async function(req, res) {
    try {
        let id_membro = req.params.id_membro;
        let sql = "SELECT * FROM historicoMembro WHERE id_membro=?;";
        let [membro] = await con.query(sql, [id_membro]);
        res.send(membro);
    } catch (e) {
        console.log("Erro na consulta ...", e);
        res.status(500).send("Erro na consulta");
    }
};

export { historicoMembro };
